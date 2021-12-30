import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./core/authentication/services/auth.service";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.authService.validateToken()) {
      this.authService.removeToken();
    }
  }
}
