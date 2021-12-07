import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { ShellComponent } from './shell.component';
import { ShellRouting } from "./shell.routing";
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    ShellComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ShellRouting,
    MatIconModule
  ]
})
export class ShellModule { }
