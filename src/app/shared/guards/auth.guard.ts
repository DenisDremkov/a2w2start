// core
	import { Injectable }     	from '@angular/core';
	import { CanActivate } 		from '@angular/router';

// services
	import { AppInitService } 	from '../services/appInit.service';

@Injectable()
export class AuthGuard implements CanActivate {
	
	constructor(private _appInitService: AppInitService) {}
	
	canActivate() {
		return this._appInitService.getUserAuth();
	}
}