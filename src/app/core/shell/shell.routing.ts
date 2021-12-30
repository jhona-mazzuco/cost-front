import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../authentication/guards/auth.guard";
import { ShellComponent } from "./shell.component";

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'cost-center',
        loadChildren: () => import('src/app/pages/cost-center/cost-center.module').then(m => m.CostCenterModule),
        canActivate: [AuthGuard]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShellRouting {
}
