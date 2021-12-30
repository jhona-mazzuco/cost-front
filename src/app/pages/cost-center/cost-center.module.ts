import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { CostCenterComponent } from './cost-center.component';
import { CostCenterRouting } from "./cost-center.routing";
import { CostCenterTableComponent } from './components/cost-center-table/cost-center-table.component';
import { CostCenterCreateComponent } from './components/cost-center-create/cost-center-create.component';



@NgModule({
  declarations: [
    CostCenterComponent,
    CostCenterTableComponent,
    CostCenterCreateComponent
  ],
  imports: [
    CommonModule,
    CostCenterRouting,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class CostCenterModule { }
