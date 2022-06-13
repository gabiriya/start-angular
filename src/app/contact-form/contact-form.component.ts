import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Emal' },
    { id: 2, name: 'Facebook' },
    { id: 3, name: 'SMS' },
  ];
  log(x: any) {
    console.log(x);
  }

  submit(f: NgForm) {
    console.log(f);
  }

  theName: string = 'youssef lotfi';
}
