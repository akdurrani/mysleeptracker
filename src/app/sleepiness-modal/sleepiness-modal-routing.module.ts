import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepinessModalPage } from './sleepiness-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SleepinessModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepinessModalPageRoutingModule {}
