import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((response) => {
      this.posts = response;
    });
  }

  // create post
  createPost(input: HTMLInputElement) {
    let post: any = {
      id: '',
      title: input.value,
    };

    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post).subscribe(
      (response) => {
        post.id = response;
        post.id = post.id.id;

        console.log(post);
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof NotFoundError)
          alert('error : ' + error.originalError);
        else throw error;
      }
    );
  }

  // update post
  updatePost(input: HTMLInputElement) {
    console.log('updating: ' + input);
    this.service.update(input).subscribe((res) => {
      console.log(res);
    });
  }

  // delete post
  deletePost(post: HTMLInputElement) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(parseInt(post.id)).subscribe(
      (res) => {
        // this.posts.splice(index, 1);
      },
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError)
          alert('this post is already deleted!');
        else throw error;
      }
    );
  }
}
