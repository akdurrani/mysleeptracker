import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogAlertPage } from './log-alert.page';

const routes: Routes = [
  {
    path: '',
    component: LogAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogAlertPageRoutingModule {}
