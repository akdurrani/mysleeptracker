import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SleepinessModalPage } from '../sleepiness-modal/sleepiness-modal.page';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  Data:StanfordSleepinessData[] = [];

  constructor(private modalController: ModalController, public sleepService:SleepService) {
    this.Data = SleepService.AllSleepinessData;
    console.log(this.Data);
  }

  async logSleepiness()
  const modal = await this.modalController.create({
    component: SleepinessModalPage
  });
  return await modal.present();
}
