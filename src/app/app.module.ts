
import { NgModule, APP_INITIALIZER  } 			from '@angular/core';
import { BrowserModule }  		from '@angular/platform-browser'; 
import { HttpModule } 			from '@angular/http';
import { AppRoutingModule } 	from './app-routing.module';

import { FormsModule }   		from '@angular/forms';
import { ReactiveFormsModule } 	from '@angular/forms';
// app main
import { AppComponent } 		from './app.component';

// componets
import { Header } 				from './components/header/header.component';
import { Footer } 				from './components/footer/footer.component';
import { NavBar } 				from './components/navbar/navbar.component';
import { Products } 			from './components/products/products.component';
import { Admin } 				from './components/admin/admin.component';
import { Home } 				from './components/home/home.component';
import { Auth } 				from './components/auth/auth.component';


// shared (services, directives)
// import { SharedModule } from './shared/shared.module';
import { AppInitService } 		from './shared/services/appInit.service';
import { LocaliService } 		from './shared/services/locali.service';
import { AuthService } 			from './shared/services/auth.service';

import { ValidMessage } from './shared/directives/validMessage.directive';


// declare var $: any; // jquery



@NgModule({
	declarations: [ 
		AppComponent,
		Header,
		Footer,
		NavBar,
		Products,
		Admin,
		Home,
		Auth,
		ValidMessage
	],
	providers: [
		AppInitService,
		{
			provide: APP_INITIALIZER,
			useFactory: (appInitService: AppInitService) => function() {return appInitService.load()},
			multi: true,
			deps: [AppInitService]
		},
		LocaliService,
		AuthService
	],
	
	imports: [ 
		BrowserModule,
		HttpModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule
		// ,
		// SharedModule
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }