import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OvernightModalPage } from '../overnight-modal/overnight-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private modalController: ModalController) {}

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


}
