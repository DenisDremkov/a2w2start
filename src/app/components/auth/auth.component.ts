'use strict';

import { Component, OnInit } 					from '@angular/core';
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { Http, Headers, RequestOptions } 		from '@angular/http';

import { AuthService } 							from '../../shared/services/auth.service';
import { User } 								from '../../interfaces/user';

@Component({
	selector: 'my-auth',
	templateUrl: './auth.component.html',
	styleUrls: [
		'./auth.component.scss'
	]
})

// продолжить с https://www.youtube.com/watch?v=ugkDA3_wxhw&t=199s
export class Auth { 

	form: FormGroup;
	pattern: string;
	createForm () {
		this.form = this.formBuilder.group({
			username: 	['', Validators.required],
			email: 		['mail@mail.ru', Validators.required],
			password: 	['', Validators.required],
			confirm: 	['', Validators.required]
		})
	}
	
	constructor (
		private formBuilder: FormBuilder,
		private authService: AuthService,

	) {
		this.createForm()
		this.pattern = "/^\d+$/";
	}

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
				console.log(data);
				this.form.controls['email'].enable();
				this.form.controls['username'].enable();
				this.form.controls['password'].enable();
				if (!data.success) {
					
				}
			})
	}
}

