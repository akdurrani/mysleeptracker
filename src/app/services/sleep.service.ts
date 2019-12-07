import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@ionic/storage';

const OVERNIGHT_KEY = 'overnight';
const SLEEPINESS_KEY = 'sleepiness';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

  constructor(private storage: Storage) {
  	if(SleepService.LoadDefaultData) {
      //this.addDefaultData();
      //this.addData();
  		SleepService.LoadDefaultData = false;
  	}
  }

  private addData() {
  //   storage.get('age').then((val) => {
  //   console.log('Your age is', val);
  // });
    // this.storage.forEach((value, key) => {
  	//      console.log("This is the value", value);
  	//      console.log("from the key", key);
    //      if(key == 'overnight')
    //       SleepService.AllOvernightData.push(value);
    //     else if(key == 'sleepiness')
    //       SleepService.AllSleepinessData.push(value);
    //     SleepService.AllSleepData.push(value);
    //   }
    // });
    this.storage.forEach((key) => {
      console.log(key);
      this.storage.get(key).then((value) => {
        if(key == 'overnight')
          SleepService.AllOvernightData.push(value);
        else if(key == 'sleepiness')
          SleepService.AllSleepinessData.push(value);
        SleepService.AllSleepData.push(value);
      });
    });
  }

  private addDefaultData() {
    this.logOvernightData(new OvernightSleepData(new Date('November 17, 2019 01:03:00'), new Date('November 17, 2019 09:25:00')));
    this.logSleepinessData(new StanfordSleepinessData(4, new Date('November 17, 2019 14:38:00')));
    this.logOvernightData(new OvernightSleepData(new Date('November 18, 2019 23:11:00'), new Date('November 18, 2019 08:03:00')));
  }

  public logOvernightData(sleepData:OvernightSleepData) {
  	// SleepService.AllSleepData.push(sleepData);
  	// SleepService.AllOvernightData.push(sleepData);
    // this.storage.set('overnight', sleepData);
    // this.storage.get('overnight').then((value)=> {
    //   console.log(value);
    // });
    return this.getAllOvernightData().then(result => {
      console.log(result);
      if (result) {
        result.push(sleepData);
        return this.storage.set(OVERNIGHT_KEY, result);
      } else {
        return this.storage.set(OVERNIGHT_KEY, [sleepData]);
      }
    });
  }

  public logSleepinessData(sleepData:StanfordSleepinessData) {
  	// SleepService.AllSleepData.push(sleepData);
  	// SleepService.AllSleepinessData.push(sleepData);
    // this.storage.set('sleepiness', sleepData);
    return this.getAllSleepinessData().then(result => {
      if (result) {
        result.push(sleepData);
        return this.storage.set(SLEEPINESS_KEY, result);
      } else {
        return this.storage.set(SLEEPINESS_KEY, [sleepData]);
      }
    });
  }

  public getAllOvernightData() {
    return this.storage.get(OVERNIGHT_KEY);
  }

  public getAllSleepinessData() {
    return this.storage.get(SLEEPINESS_KEY);
  }
}
