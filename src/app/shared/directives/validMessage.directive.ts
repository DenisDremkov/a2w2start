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
	private wrapper: any;
	
	createMessage (wrap:any, err:any) {
		console.log(wrap, err)
		let message;
		for (var key in err) {
			if (err.hasOwnProperty(key)) {
				// message = this.locali[key];
				console.error(this.locali)
			};
		// 	console.log(key,this.locali)
		// 	message = message + ' ' + this.locali[key];
		}
		// wrap.append('<span class="my_valid_message">' + message + '</span>')
	}

	removeMessage (wrap:any) {
		let message = wrap.find('.my_valid_message');
    	if (message.length) { message[0].remove(); }
	}
	
	init( elem: any, control:any ) {
		if (!this.wrapper) {
			this.wrapper = $(elem.parent());
		}
		
        if ( !this.wrapper.hasClass('js_my_input_wrap') ) {
        	console.error('valid message directive: wrap input in element with class - "js_my_input_wrap" ');
        } else {
        	let positionCss;
        	positionCss = this.wrapper.css('position');
        	if (positionCss === 'static' || positionCss === 'inherit') {
        		console.error('valid message directive: set position relative for wrapper');
        	}
        	else {
	        	this.removeMessage(this.wrapper)
	        	this.createMessage(this.wrapper, this.controls[this.controlName].errors)
        	}
        }
    }

    @Input() controls: object;
	@Input() controlName: string;
	
	constructor(
		
		private _el: ElementRef,
		private _localiService: LocaliService
	) { 
		_el.nativeElement.style.backgroundColor = 'yellow';
		// this.locali = this._localiService.getData('validErrorMessages');
		// console.log('create directive')
		// console.log(this.locali)
	};
	


	onBlur(e:any) {
		if (this.controls[this.controlName].invalid) {
			// console.log(this.controls[this.controlName])
			this.init($(this._el.nativeElement), this.controls[this.controlName])
		}
		else {
			this.removeMessage(this.wrapper);
		}
	}
}
 