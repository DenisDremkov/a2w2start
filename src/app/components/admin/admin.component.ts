import { Component } 			from '@angular/core';
import { ViewEncapsulation } 	from '@angular/core';


@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
	styleUrls: [
		'./admin.component.scss'
	]
})

export class Admin { 
	constructor (){
		console.log('create admin class')
	}
}