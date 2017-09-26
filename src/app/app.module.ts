// core
	import { NgModule, APP_INITIALIZER  } 	from '@angular/core';
	import { BrowserModule }  				from '@angular/platform-browser'; 
	import { BrowserAnimationsModule } 		from '@angular/platform-browser/animations';
	import { HttpModule } 					from '@angular/http';
	import { AppRoutingModule } 			from './app-routing.module';
	import { FormsModule }   				from '@angular/forms';
	import { ReactiveFormsModule } 			from '@angular/forms';

// app main
	import { AppComponent } 		from './app.component';

// componets
	import { Header } 				from './components/header/header.component';
	import { Footer } 				from './components/footer/footer.component';
	import { NavBar } 				from './components/navbar/navbar.component';
	import { Products } 			from './components/products/products.component';
	import { Admin } 				from './components/admin/admin.component';
	import { Home } 				from './components/home/home.component';
	import { Login } 				from './components/login/login.component';
	import { Registr } 				from './components/registr/registr.component';
	import { Profile } 				from './components/profile/profile.component';


// shared
	// services
	import { AppInitService } 		from './shared/services/appInit.service';
	import { LocaliService } 		from './shared/services/locali.service';
	import { AuthService } 			from './shared/services/auth.service';
	// guards
	import { AuthGuard } 			from './shared/guards/auth.guard';
	// directives
	import { ValidMessage } 		from './shared/directives/validMessage.directive';



@NgModule({
	declarations: [ 
		AppComponent,
		Header,
		Footer,
		NavBar,
		Products,
		Admin,
		Home,
		Registr,
		Login,
		ValidMessage,
		Profile
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
		AuthService,
		AuthGuard
	],
	
	imports: [ 
		BrowserModule,
		BrowserAnimationsModule,
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