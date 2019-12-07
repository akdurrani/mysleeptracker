import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
//import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-sleepiness-modal',
  templateUrl: './sleepiness-modal.page.html',
  styleUrls: ['./sleepiness-modal.page.scss'],
})
export class SleepinessModalPage implements OnInit {
  Data:String[] = [];
  value:string = '';

  constructor(private modalController: ModalController, public sleepService:SleepService, public alertController: AlertController, public toastController: ToastController) {
    this.Data = StanfordSleepinessData.ScaleValues;
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  saveSleepiness(val:string){
    //this.startTime = new Date("2019-12-05T12:53:39.151-08:00");
    this.value = val;
    console.log(this.value);
  }

  logSleepinessData(){
    if(this.value == '')
      this.showNoInputToast();
    // else if(this.getStartTime().getTime()>this.getEndTime().getTime())
    //   this.showErrorAlert();
    // else{
    //   if(!this.undoInputToast()){
    //     const overnightData = new OvernightSleepData(this.getStartTime(), this.getEndTime());
    //     console.log(overnightData);
    //   }
    // }
    else
      this.undoInputToast();
  }

  async showNoInputToast(){
    // const inputAlert = await this.alertController.create({
    // message: 'Please select a start and end time.'
    // });
    // return await setTimeout(()=> inputAlert.present(),1000);
    const inputToast = await this.toastController.create({
      message: 'Please select a sleepiness degree.',
      position: 'top',
      duration: 2000
    });
    inputToast.present();
  }

  async undoInputToast() {
    const toast = await this.toastController.create({
      message: 'Sleepiness log saved!',
      position: 'middle',
      buttons: [
        {
          side: 'start',
          text: 'Done',
          handler: () => {
            console.log('Done clicked');
            let sleepData = new SleepData(new Date());
            var obj = {'id': sleepData.id.toString(), 'loggedAt': sleepData.loggedAt.toString(), 'loggedValue': (parseInt(this.value)-1)};
            let sleepinessData = new StanfordSleepinessData(obj);
            //console.log(parseInt(this.value)-1);
            this.sleepService.logSleepinessData(sleepinessData);
            //console.log(SleepService.AllOvernightData[2].dateString());
            this.dismiss();
          }
        }, {
          text: 'Undo',
          icon: 'undo',
          //role: 'cancel',
          handler: () => {
            console.log('Undo clicked, nothing saved');
            //console.log(SleepService.AllOvernightData[2].dateString());
          }
        }
      ]
    });
    toast.present();
  }

}
