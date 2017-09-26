'use strict';

// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable} 	from 'rxjs/Rx';


@Injectable()

export class AppInitService {
    
    private domain:any = 'http://localhost:3000';
    
    private _userAuth: boolean;
    private _user: any;
    private _config: any;
    private _userLanguage: string;


  // private language:any = window.navigator.userLanguage || window.navigator.language;

    constructor(private http: Http){
          this._userLanguage = localStorage.getItem('my-app-lang') || navigator.language
    }
    // localStorage.getItem('language', 'en');
    load(): Promise<any>{
        let params = new URLSearchParams();
        
        params.set('lang', this._userLanguage);
        
        return this.http
            .get(this.domain + '/appInit', { search: params })
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

    private setUserAuth () {
        this._userAuth = true;
    }

    getUserLanguage(): any { return this._userLanguage; }
    
    getFullLocali ():any { return this._config; }
    
    setUserProfile(user:any) { this._user = user; this.setUserAuth()}
    
    getUserProfile() { return this._user; }

    getUserAuth() {
        return this._userAuth;
    }
}