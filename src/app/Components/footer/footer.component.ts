import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [],
	template: `
		<footer
			style="
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #f2c1ac;
		padding: 1rem;
		font-weight: bold;
		margin-top: 1rem;
		border-top: 1px solid #f5ddd2;
	">
			<p>&copy; Copyright 2024 - All Rights Reserved</p>
			<p>
				Powered by
				<a href="https://github.com/Darsssiiieee"> Darsie </a>
			</p>
		</footer>
	`,
	styleUrl: './footer.component.css',
})
export class FooterComponent {}
