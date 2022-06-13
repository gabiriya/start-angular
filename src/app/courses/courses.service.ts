import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  getCourses() {
    return ['course 1', 'course 2', 'course 3'];
  }
}
