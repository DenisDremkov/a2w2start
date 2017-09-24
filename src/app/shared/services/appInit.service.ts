'use strict';

// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} 	from 'rxjs/Rx';


@Injectable()

export class AppInitService {
	private domain:any = 'http://localhost:3000';

	private _config: any;
  private params:URLSearchParams;


  // private language:any = window.navigator.userLanguage || window.navigator.language;

    constructor(private http: Http){
      
    }
    // localStorage.getItem('language', 'en');
    load(): Promise<any>{
        let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');  
            myHeaders.append('param',   "{lang: 'ru'}");  
        // let myParams = new URLSearchParams();
            // myParams.append('lang', 'ru');  
        let options = new RequestOptions({ headers: myHeaders });

        return this.http.get(this.domain + '/appInit', options)
        .map( (response: Response) => response.json())
        .toPromise()
        .then(data => {
            console.log(data)
            this._config = data;
            console.log(this._config)
            return data;
        })
    }
    
    get config(): any {
        return this._config;
    }
}