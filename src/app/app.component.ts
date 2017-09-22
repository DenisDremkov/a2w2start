import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';




@Component({
	selector: '[my-app]',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.reset.scss', // first in list
		// './app.config.scss',
		'./app.styles.scss'

	],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
