import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { LoggingService } from '../../logging services';
import { AlertLoggingService } from '../../alert services';
import { ConsoleLoggingService } from '../../console services';
import { EmailNotificationService } from '../../email services';
@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterLink],
	template: `
		<nav
			style="
		display: flex;
		justify-content: center;
		flex-direction: row;
		width: 100%;
		background-color: #f2c1ac;
		font-weight: bold;
		border-top: 1px solid #f5ddd2;
	">
	<header class="layout-header">
        <h1 class="base-heading">SOLID PRINCIPLES IN ANGULAR</h1>
   
			<ul
				style="
			display: flex;
			justify-content: center;
			flex-direction: row;
			gap: 20px;
			list-style: none;
		">
		
				<li><a routerLink="#">Home</a></li>
				<li><a routerLink="#">About</a></li>
				<li><a routerLink="#">Contact</a></li>
			</ul> 
		</header>
		</nav>
	`,
	styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
	constructor(
		private loggingService: LoggingService,
		private alertLoggingService: AlertLoggingService,
		private consoleLoggingService: ConsoleLoggingService,
		private emailNotificationService: EmailNotificationService,
	) {}

	ngOnInit(): void {
		this.loggingService.log('Navigation Bar Component Initialized');
		this.alertLoggingService.logAlert('Navigation Bar Component Initialized');
		this.consoleLoggingService.logConsole('Navigation Bar Component Initialized');
		this.emailNotificationService.send('Some kind of message');
	}
}