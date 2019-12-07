import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private sleepStart:Date;
	private sleepEnd:Date;

	//constructor(sleepStart:Date, sleepEnd:Date) {
	constructor(objectModel:Object){
		console.log(objectModel.loggedAt);
		super(new Date(objectModel['loggedAt']));
		this.sleepStart = new Date(objectModel['sleepStart']);
		this.sleepEnd = new Date(objectModel['sleepEnd']);
		this.id = objectModel.id;
		console.log(objectModel.sleepStart);
	}

	summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = 0;
		if(sleepEnd_ms > sleepStart_ms)
			difference_ms = sleepEnd_ms - sleepStart_ms;
		else
			difference_ms = sleepStart_ms - sleepEnd_ms;

		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
	}

	dateString():string {
		return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}
}
