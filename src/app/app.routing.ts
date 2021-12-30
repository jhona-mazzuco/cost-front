import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./core/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: '',
    loadChildren: () => import('./core/shell/shell.module').then(m => m.ShellModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
