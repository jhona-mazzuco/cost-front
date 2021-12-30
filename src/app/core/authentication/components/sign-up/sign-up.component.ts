import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { EqualPasswordValidator } from "../../validators/equal-password.validator";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, [Validators.required, EqualPasswordValidator.validate])
    });
  }

  submit() {
    const { name, email, password } = this.form.value;
    this.service.signUp(name, email, password).subscribe({
      next: (token) => this.onSuccess(token),
    })
  }

  onSuccess(token: string): void {
    this.service.saveToken(token);
    this.router.navigateByUrl('');
  }
}
