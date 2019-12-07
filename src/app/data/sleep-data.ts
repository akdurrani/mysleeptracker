import { generate } from 'shortid';

export class SleepData {
	id:string;
	loggedAt:Date;

	constructor(date:Date) {
		//Assign a random (unique) ID. This may be useful for comparison (e.g., are two logged entries the same).
		this.id = generate();
		//console.log(date);
		this.loggedAt = new Date(date.toString());//new Date();
		//console.log(this.loggedAt);
	}

	summaryString():string {
		return 'Unknown sleep data';
	}

	dateString():string {
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}
}
