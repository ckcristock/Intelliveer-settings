import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
  {
    path: 'onboarding',
    loadChildren: () =>
      import('../settings/onboarding/onboarding.module').then(
        (m) => m.OnboardingModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
