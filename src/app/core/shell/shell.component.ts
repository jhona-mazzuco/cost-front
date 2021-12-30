import { Component } from '@angular/core';
import { RouterAnimation } from "./animations/router-animation";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [RouterAnimation]
})

export class ShellComponent {
}
