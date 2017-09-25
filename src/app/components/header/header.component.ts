'use strict';

// core
	import { Component } 			from '@angular/core';
	import { ViewEncapsulation } 	from '@angular/core';

// services
	import { AuthService } 			from '../../shared/services/auth.service';
	import { AppInitService } 			from '../../shared/services/appInit.service';


@Component({
	selector: '[app-header]',
	templateUrl: './header.component.html',
	styleUrls: [
		'./header.component.scss'
	]
})


export class Header {
	
	selectedLanguage: string;

	constructor ( private _authService: AuthService, private _appInitService: AppInitService ) {
		this.selectedLanguage = _appInitService.getUserLanguage()
	}
 
	changeLanguage () {
		localStorage.setItem('my-app-lang', this.selectedLanguage);
		this._authService.setLanguageToDatabase(this.selectedLanguage).subscribe( (data:any) =>{
			location.reload();
		}) 
	}	
}