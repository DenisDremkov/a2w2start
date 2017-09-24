'use strict';

// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// // Import RxJs required methods
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()

export class LocaliService {
	private lang: any;
	private domain:any = 'http://localhost:3000';
	// http > json
	private data:any;

	constructor (private http: Http) {
		console.log('create locali')
		this.http
				.get(this.domain + '/getLocalization')
				.subscribe(data => this.data = data.json());
	}
	// JSON.parse(data.text()))

	getData (section:string) {
		console.error(section, this.data)
		// return this.data[section];
		// console.log(this.data)
	// 	if (this.data) {
	// 		console.log(this.data);
	// 		return this.data;
			
	// 	}
	// 	else {
	// 		this.lang = {userLanguage:'en'};
	// 		console.log('ytn')
	// 		return 
	// 	}	
	}
}