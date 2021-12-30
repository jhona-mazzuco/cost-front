import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CostCenterCreateComponent } from "./components/cost-center-create/cost-center-create.component";
import { CostCenterComponent } from "./cost-center.component";

const routes: Routes = [
  {
    path: '',
    component: CostCenterComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CostCenterRouting {
}
