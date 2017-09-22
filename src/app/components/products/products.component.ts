import { Component } 			from '@angular/core';
import { ViewEncapsulation } 	from '@angular/core';

import {LocaliService} from '../../shared/services/locali.service';

@Component({
	selector: 'products',
	templateUrl: './products.component.html',
	styleUrls: [
		'./products.component.scss'
	]
})
export class Products { 
	
	private locali: any;

	constructor (private localiService: LocaliService) {
		// this.locali = this.localiService.getDate();
	}
	
	// ngOnInit() {}
}