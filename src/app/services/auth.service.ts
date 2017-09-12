import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import { appConfig } from './commonApp/configApp.js'

@Injectable()

export class authService {
  constructor ( private http: Http) {}

  getUser() {
  	console.log(appConfig)
    // return this.http.get(`http://localhost:9000` + '/api')
    // 	.map((res:Response) => this.data = res.json());
  }

}