import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepinessModalPageRoutingModule } from './sleepiness-modal-routing.module';

import { SleepinessModalPage } from './sleepiness-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepinessModalPageRoutingModule
  ],
  declarations: [SleepinessModalPage]
})
export class SleepinessModalPageModule {}
