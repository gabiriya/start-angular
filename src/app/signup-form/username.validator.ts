import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'youssef') {
      return { shouldBeUnique: true };
    }
    return null;
  }

  static shouldBeUnique2(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | null {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'youssef') {
          console.log('if statement');
          resolve({ shouldBeUnique: true });
        } else {
          console.log('else statement');
          resolve(null);
        }
      }, 1500);
    });
  }
}
