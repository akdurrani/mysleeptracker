import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { OvernightModalPageModule } from '../overnight-modal/overnight-modal.module';
import { LogAlertPageModule } from '../log-alert/log-alert.module';
import { SleepinessModalPageModule } from '../sleepiness-modal/sleepiness-modal.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    OvernightModalPageModule,
    LogAlertPageModule,
    SleepinessModalPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
