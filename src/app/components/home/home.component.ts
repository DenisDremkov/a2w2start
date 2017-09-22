'use strict';

import { Component, OnInit } 	from '@angular/core';
import { ViewEncapsulation } 	from '@angular/core';
import { Router }  				from '@angular/router';



import {LocaliService} from '../../shared/services/locali.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: [
		'./home.component.scss'
	]
})

export class Home { 

	private locali: any;

	constructor (
		private localiService: LocaliService,
		private router: Router
		) {
		// this.locali = this.localiService.getDate();
	}

	testScope () {
		this.router.navigateByUrl('/products');
	}
}