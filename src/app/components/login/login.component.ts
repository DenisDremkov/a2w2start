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
	import { AppInitService } 						from '../../shared/services/appInit.service';

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
	serverResponse: string;
	
	constructor (
		private _appInitService: AppInitService,
		private _formBuilder: FormBuilder,
		private _authService: AuthService,
		private _location: Location,
		private _router: Router
	) {
		this.createForm()
	}

	createForm () {
		this.form = this._formBuilder.group({
			username: 	['', Validators.required],
			password: 	['', Validators.required]
		})
	}

	back () {this._router.navigate(['/home']);}

	login() {
		let user = {
			username: this.form.get('username').value,
			password: this.form.get('password').value
		}
		this._authService.login(user).subscribe((data:any)=>{
			if (data.success) {
				this._authService.setLogIn(true);
				this._appInitService.setUserProfile(data.user);
				this.serverResponse = data.msg;
				this._router.navigate(['/home']);

			} else {
				this.serverResponse = data.msg;
				console.log(data.msg)
			}
		});
	}
}



