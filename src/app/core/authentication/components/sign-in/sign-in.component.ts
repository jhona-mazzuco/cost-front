import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form!: FormGroup;

  constructor(private service: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      rememberMe: new FormControl()
    })
  }

  submit(): void {
    const { email, password } = this.form.value;
    this.service.signIn(email, password).subscribe({
      next: (token) => this.onSuccess(token),
    });
  }

  onSuccess(token: string): void {
    this.service.saveToken(token);
    this.router.navigateByUrl('');
  }
}
