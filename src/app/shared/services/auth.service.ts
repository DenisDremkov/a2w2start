import { Injectable } 			from '@angular/core';
import { Http, Response } 		from '@angular/http';
import { Observable } 			from 'rxjs';

import { User } 								from '../../interfaces/user';

@Injectable()

export class AuthService {

	private domain:any = 'http://localhost:3000';

	constructor ( private http: Http ) {}

	registerUser (user:User) {
		return this.http.post(this.domain + '/auth/register', user).map(res => res.json());
	}
}