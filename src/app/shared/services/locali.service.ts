'use strict';

// core
	import { Injectable }     from '@angular/core';
	import { Http, Response, Headers, RequestOptions } from '@angular/http';
	import { Observable } 		from 'rxjs/Rx';

// service
	import { AppInitService } from './appInit.service';

@Injectable()

export class LocaliService {

	private _locali:any;

	constructor (private http: Http, private _appInitService: AppInitService) {
		this._locali = this._appInitService.getFullLocali();
	}

	getSectionLocali (section:string) {
		return this._locali[ section ];	
	}

	changeLocali(lang:string) {
		
	}
}