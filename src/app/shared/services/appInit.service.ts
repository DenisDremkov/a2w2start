'use strict';

// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} 	from 'rxjs/Rx';


@Injectable()

export class AppInitService {
	private domain:any = 'http://localhost:3000';

	private _config: any;

    constructor(private http: Http){}

    load(): Promise<any>{
        return this.http.get(this.domain + '/appInit')
              .map( (response: Response) => response.json())
              .toPromise()
              .then(data => {
                  this._config = data;
                  console.log(this._config)
                  return data;
               })
    }
    
    get config(): any {
        return this._config;
    }
}