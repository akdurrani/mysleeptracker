import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-sleepiness-modal',
  templateUrl: './sleepiness-modal.page.html',
  styleUrls: ['./sleepiness-modal.page.scss'],
})
export class SleepinessModalPage implements OnInit {

  constructor(private modalController: ModalController, public sleepService:SleepService, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
  }

}
