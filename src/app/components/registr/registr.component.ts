'use strict';
// core
	import { Component, OnInit } 					from '@angular/core';
	import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
	import { Http, Headers, RequestOptions } 		from '@angular/http';
	import { Location } 							from '@angular/common';
	import { 
		Router, 
		CanActivate, 
		ActivatedRouteSnapshot, 
		RouterStateSnapshot 
	} 												from '@angular/router';

// services
	import { AuthService } 							from '../../shared/services/auth.service';

// interface
	import { User } 								from '../../interfaces/user';

// animation
	import { slideInOutAnimation } 					from '../_animations/slide-in-out.animation';
	import { fadeInAnimation } 						from '../_animations/fade-in.animation';

@Component({
	selector: 		'my-auth',
	templateUrl: 	'./registr.component.html',
	styleUrls: 		['./registr.component.scss'],
	host: 			{ '[@slideInOutAnimation]': '' },
	animations: 	[slideInOutAnimation]
})

export class Registr { 

	form: FormGroup;
	pattern: string;
	
	constructor (
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private _location: Location,
		private _router: Router

	) {
		this.form = this.formBuilder.group({
			username: 	['', Validators.required],
			email: 		['mail@mail.ru', Validators.required],
			password: 	['', Validators.required],
			confirm: 	['', Validators.required]
		})
	}

	back () {this._location.back();}

	registerUser() {

		let newUser:User = {
			email		: this.form.get('email').value,
			username	: this.form.get('username').value,
			password	: this.form.get('password').value
		};

		this.form.controls['email'].disable();
		this.form.controls['username'].disable();
		this.form.controls['password'].disable();
		
		this.authService
			.registerUser( newUser )
			.subscribe( (data:any) =>{
				this.form.controls['email'].enable();
				this.form.controls['username'].enable();
				this.form.controls['password'].enable();
				if (data.success) {
					console.log('registration success');
					 this._router.navigate(['/login']);									
				}
				else {
					console.log(data.msg)
				}
			})
	}
}

