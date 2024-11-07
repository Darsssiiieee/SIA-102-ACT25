import { Injectable } from '@angular/core';

interface Notification {
	send(message: string): void;
}

@Injectable({
	providedIn: 'root',
})
export class EmailNotificationService implements Notification {
    constructor() { }

    send(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}