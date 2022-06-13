import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  // get All
  getAll() {
    return this.http.get(this.url).pipe(retry(1), catchError(this.handleError));
  }

  // create
  create(resource: any) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(retry(1), catchError(this.handleError));
  }

  // update
  update(resource: any) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(retry(1), catchError(this.handleError));
  }

  // Delete
  delete(id: number) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // handle error method
  private handleError(error: Response) {
    if (error.status == 404) return throwError(() => new NotFoundError(error));
    if (error.status == 400) return throwError(() => new BadInput(error));
    return throwError(() => new AppError(error));
  }
}
