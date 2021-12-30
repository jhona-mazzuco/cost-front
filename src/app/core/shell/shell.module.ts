import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { ShellComponent } from './shell.component';
import { ShellRouting } from "./shell.routing";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    ShellComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ShellRouting,
    MatIconModule,
    MatCardModule
  ]
})
export class ShellModule { }
