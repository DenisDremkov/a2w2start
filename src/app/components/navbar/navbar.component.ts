
// core
	import { Component } 			from '@angular/core';
	import { ViewEncapsulation } 	from '@angular/core';

// service
	import { LocaliService } 		from '../../shared/services/locali.service';
	import { AuthService } 			from '../../shared/services/auth.service';


@Component({
	selector: '[my-navbar]',
	templateUrl: './navbar.component.html',
	styleUrls: [
		'./navbar.component.scss'
	]
})


export class NavBar { 

	locali:any;
	isLogIn:any;
	
	constructor (private _localiService: LocaliService, private _authService: AuthService) {
		this.locali = _localiService.getSectionLocali('navigation');
		this.isLogIn = function () {
			return this._authService.isLogIn();
		}
	}
}