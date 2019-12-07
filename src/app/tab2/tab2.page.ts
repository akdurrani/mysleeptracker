import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OvernightModalPage } from '../overnight-modal/overnight-modal.page';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Data:OvernightSleepData[] = [];

  constructor(private modalController: ModalController, public sleepService:SleepService) {
    //this.Data = SleepService.AllOvernightData;
    this.sleepService.getAllOvernightData().then(result => {
      console.log(result);
      if (result) {
        Array.from(result).map((item)=>{
          console.log(item);
          this.Data.push(new OvernightSleepData(item));
        });
      }
    });
    console.log(this.Data);
  }

  // async logOvernight(){
  //   console.log("OvernightModal");
  //   const nightLogModal = await this.nightModal.create('OvernightModalPage');
  //   return await nightLogModal.present();
  //
  // }

  async logOvernight() {
   const modal = await this.modalController.create({
     component: OvernightModalPage
   });
   return await modal.present();
 }

    // generateLogItems() {
    //   let itemString = '';
    //   for (let i = 0; i < SleepService.AllOvernightData.length(); i++) {
    //     let log = '' + SleepService.AllOvernightData[i].dateString() + SleepService.AllOvernightData[i].summaryString();
    //     itemString += `
    //       <ion-item>
    //         <ion-label>${i}: ${log}</ion-label>
    //       </ion-item>
    //     `;
    //   }
    //   return itemString;
    // }
    //   generateLogItems() {
    //   return `
    //     <ion-list *ngFor="let log of SleepService.AllOvernightData; let i=index">
    //     <ion-item>
    //       <ion-label>{{i+1}}. {{log.dateString}}</ion-label>
    //     </ion-item>
    //     </ion-list>
    //   `;
    // }


}
