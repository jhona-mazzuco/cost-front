import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors } from "@angular/forms";

@Directive({
  selector: '[appEqualPassword]'
})
export class EqualPasswordValidator {
  static validate(control: AbstractControl): ValidationErrors | null {
    return control.parent?.get('password')?.value === control.value ? null : { equalPassword: true };
  }
}
