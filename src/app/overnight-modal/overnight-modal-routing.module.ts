import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvernightModalPage } from './overnight-modal.page';


const routes: Routes = [
  {
    path: '',
    component: OvernightModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvernightModalPageRoutingModule {



}
