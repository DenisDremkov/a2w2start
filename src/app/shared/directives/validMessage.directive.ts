'use strict';

import { 
	Directive, 
	ElementRef, 
	Input, 
	HostListener,
	ViewEncapsulation,
	OnInit } 	from '@angular/core';
import {LocaliService} from '../../shared/services/locali.service';


declare var $: any; // jquery

@Directive({
	selector: '[my-valid-message]'
	,
	host: {
		// '(keyup)': 'onKeyUp($event)',
		'(blur)': 'onBlur($event)'
	}
})

export class ValidMessage {

	private locali: any;

	@Input() controls: object;
	@Input() controlName: string;
	
	constructor(
		
		private el: ElementRef,
		private localiService: LocaliService
	) { 
		el.nativeElement.style.backgroundColor = 'yellow';
		this.locali = this.localiService.getData('validErrorMessages');
	};

	onBlur(e:any) {
		if (this.controls[this.controlName].invalid) {
			console.log(this)
			console.log(this.controls[this.controlName].errors)

		}
	}
}
 