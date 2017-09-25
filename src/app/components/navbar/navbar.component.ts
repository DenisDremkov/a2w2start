
// core
	import { Component } 			from '@angular/core';
	import { ViewEncapsulation } 	from '@angular/core';

// service
	import { LocaliService } from '../../shared/services/locali.service';

// повторить роутинг и детали роутинга, начать видео регистрации монго дб модель

@Component({
	selector: '[my-navbar]',
	templateUrl: './navbar.component.html',
	styleUrls: [
		'./navbar.component.scss'
	]
})


export class NavBar { 

	locali:any;
	
	constructor (private _localiService: LocaliService) {
		this.locali = _localiService.getSectionLocali('navigation')
	}
}