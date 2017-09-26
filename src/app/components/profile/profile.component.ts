'use strict';

// core
	import { Component, OnInit } 					from '@angular/core';
	
// services
	import { AppInitService } 						from '../../shared/services/appInit.service';

@Component({
	selector: 		'profile',
	templateUrl: 	'./profile.component.html',
	styleUrls: 		['./profile.component.scss']
})


export class Profile { 
	
	userProfile:any;

	constructor (private appInitService: AppInitService) {
		this.userProfile = appInitService.getUserProfile()
	}
}



