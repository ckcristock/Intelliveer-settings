import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/settings',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      )
  },
  {
    path: '**',
    loadChildren: () =>
      import('../app/pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
