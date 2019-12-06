import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogAlertPageRoutingModule } from './log-alert-routing.module';

import { LogAlertPage } from './log-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogAlertPageRoutingModule
  ],
  declarations: [LogAlertPage]
})
export class LogAlertPageModule {}
