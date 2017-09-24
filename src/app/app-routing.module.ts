
import { RouterModule, Routes } from '@angular/router';
import { NgModule } 			from '@angular/core';


import { Products } 			from './components/products/products.component';
import { Admin } 				from './components/admin/admin.component';
import { Home } 				from './components/home/home.component';
import { Registr } 				from './components/registr/registr.component';
import { Login } 				from './components/login/login.component';

const appRoutes: Routes = [
	{
		path: '',
		component: Home
	},
	{
		path: 'home',
		component: Home
	},	
	{
		path: 'products',
		component: Products
	},
	{
		path: 'admin',
		component: Admin
	},
	{
		path: 'login',
		// component: Login 
		children: [
			{
				path: '',
				component: Login 
			},
			{
				path: 'registration',
				component: Registr 
			}
		]
	},
	// { 
	// 	path: 'registration', 
	// 	component: Registr 
	// },
	// {
	// 	path: 'baket',
	// 	component: Basket
	// },
	{
		path: '**',
		redirectTo: 'home'
		// component: Home
	}
];

@NgModule({
	declarations: [],
	imports: [
    	RouterModule.forRoot(appRoutes) // forRoot(appRoutes, { useHash: true })  todo hash if prod mode
    ],
	bootstrap: [],
	exports: [RouterModule] 
})

export class AppRoutingModule { }