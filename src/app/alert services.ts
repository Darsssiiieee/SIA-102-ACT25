import { Injectable } from '@angular/core';
import { AlertLogger } from './interface/logger';

@Injectable({
	providedIn: 'root',
})
export class AlertLoggingService implements AlertLogger {
	constructor() {}
	logAlert(message: string): void {
		alert(`Alert: ${message}`);
	}
	log(message: string): void {
		console.log(`Log: ${message}`);
	}
}