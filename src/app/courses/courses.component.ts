import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses', // <courses>
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  title = 'list of courses';

  constructor(private service: CoursesService) {}
  courses = this.service.getCourses();
}
