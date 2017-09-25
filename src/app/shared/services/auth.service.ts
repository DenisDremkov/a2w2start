// core
	import { Injectable } 			from '@angular/core';
	import { 
		Http, 
		Response, 
		Headers, 
		RequestOptions } 			from '@angular/http';
	import { Observable } 			from 'rxjs';

// interfaces
	import { User } 								from '../../interfaces/user';

@Injectable()

export class AuthService {

	private domain:any = 'http://localhost:3000';

	constructor ( private _http: Http ) {}

	registerUser (user:User) {
		return this._http.post(this.domain + '/auth/register', user).map(res => res.json());
	}

	setLanguageToDatabase(lang:string) {
		return this._http
			.post(this.domain + '/setLanguage', {language: lang})
			.map(res => res.json());
	}
}