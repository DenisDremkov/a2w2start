'use strict';

// core
	import { Component, OnInit } 					from '@angular/core';
	import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
	import { Http, Headers, RequestOptions } 		from '@angular/http';
	import { Location } 							from '@angular/common';

// services
	import { AuthService } 							from '../../shared/services/auth.service';

// interface
	import { User } 								from '../../interfaces/user';
	
// animation
	import { slideInOutAnimation } 					from '../_animations/slide-in-out.animation';
	import { fadeInAnimation } 						from '../_animations/fade-in.animation';

@Component({
	selector: 		'login',
	templateUrl: 	'./login.component.html',
	styleUrls: 		['./login.component.scss'],
	host: 			{ '[@fadeInAnimation]': '' },
	animations: 	[fadeInAnimation]
    
})


export class Login { 

	form: FormGroup;
	
	constructor (
		private _formBuilder: FormBuilder,
		private _authService: AuthService,
		private _location: Location
	) {
		this.createForm()
	}

	createForm () {
		this.form = this._formBuilder.group({
			username: 	['', Validators.required],
			password: 	['', Validators.required]
		})
	}

	back () {this._location.back();}
}



