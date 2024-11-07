import { Injectable } from '@angular/core';
import { ConsoleLogger } from './interface/logger';
@Injectable({
	providedIn: 'root',
})
export class ConsoleLoggingService implements ConsoleLogger {
    constructor() { }
    log(message: string): void {
        console.log(`Log: ${message}`);
    }
	logConsole(message: string): void {
		console.log(`Console: ${message}`);
	}
}