import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvernightModalPageRoutingModule } from './overnight-modal-routing.module';

import { OvernightModalPage } from './overnight-modal.page';

import { LogAlertPageModule } from '../log-alert/log-alert.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvernightModalPageRoutingModule,
    LogAlertPageModule
  ],
  declarations: [OvernightModalPage]
})
export class OvernightModalPageModule {}
