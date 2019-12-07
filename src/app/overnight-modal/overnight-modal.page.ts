import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-overnight-modal',
  templateUrl: './overnight-modal.page.html',
  styleUrls: ['./overnight-modal.page.scss'],
})
export class OvernightModalPage implements OnInit {
  startTime:Date;
  endTime:Date;
  isStart:boolean;
  isEnd:boolean;
  //loggedAt:Date;

  constructor(private modalController: ModalController, public sleepService:SleepService, public alertController: AlertController, public toastController: ToastController) {
    this.isStart = false;
    this.isEnd = false;


  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  saveStart(){
    //this.startTime = new Date("2019-12-05T12:53:39.151-08:00");
    this.isStart = true;
    console.log(new Date(this.startTime));
  }

  saveEnd(){
    // if(this.startTime<event.target.value)
    //   this.endTime = event.target.value;
    // else
    //   console.log("this.endTime");
    this.isEnd = true;
    console.log(new Date(this.endTime));

  }

  getStartTime(){
    return new Date(this.startTime);
  }

  getEndTime(){
    return new Date(this.endTime);
  }



  logOvernightData(){
    if(!this.isStart || !this.isEnd)
      this.showNoInputToast();
    // else if(this.getStartTime().getTime()>this.getEndTime().getTime())
    //   this.showErrorAlert();
    else{
      this.undoInputToast();
      //  const overnightData = new OvernightSleepData(this.getStartTime(), this.getEndTime());
        //console.log(overnightData);

    }

  }

  async undoInputToast() {
    const toast = await this.toastController.create({
      message: 'Overnight sleep log saved!',
      position: 'middle',
      buttons: [
        {
          side: 'start',
          text: 'Done',
          handler: () => {
            console.log('Done clicked');
            let sleepData = new SleepData(new Date());
            //console.log(sleepData);
            var obj = {'id': sleepData.id.toString(), 'loggedAt': sleepData.loggedAt.toString(), 'sleepStart': this.getStartTime().toString(), 'sleepEnd': this.getEndTime().toString()};
            //console.log(obj['startTime']);
            let overnightData = new OvernightSleepData(obj);
            //console.log(overnightData);
            this.sleepService.logOvernightData(overnightData);
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

  // async showErrorAlert() {
  //   // const errAlert = await this.alertController.create({
  //   // message: 'End time cannot be before start time.'
  //   // });
  //   // return await setTimeout(()=> errAlert.present(),1000);
  //   const errToast = await this.toastController.create({
  //     message: 'End time cannot be before start time.',
  //     duration: 2000
  //   });
  //   errToast.present();
  //
  // }

  async showNoInputToast(){
    // const inputAlert = await this.alertController.create({
    // message: 'Please select a start and end time.'
    // });
    // return await setTimeout(()=> inputAlert.present(),1000);
    const inputToast = await this.toastController.create({
      message: 'Please select a start and end time.',
      position: 'top',
      duration: 2000
    });
    inputToast.present();
  }



}
