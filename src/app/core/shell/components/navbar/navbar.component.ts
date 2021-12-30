import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ICONS_TO_REGISTRY } from "./constants/icons-to-registry.constant";
import { ROUTES } from "./constants/routes.constant";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  routes = ROUTES;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    for (const { name, filename } of ICONS_TO_REGISTRY) {
      this.matIconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(filename));
    }
  }
}
