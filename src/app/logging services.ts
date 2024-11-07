import { Injectable } from '@angular/core';
import { Logger } from './interface/logger';

@Injectable({
	providedIn: 'root',
})
export class LoggingService implements Logger {
	constructor() {}
	log(message: string): void {
		console.log(`Log: ${message}`);
	}
}