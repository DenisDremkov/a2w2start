
import { RouterModule, Routes } from '@angular/router';
import { NgModule } 			from '@angular/core';


import { Products } 			from './components/products/products.component';
import { Admin } 				from './components/admin/admin.component';
import { Home } 				from './components/home/home.component';
import { Auth } 				from './components/auth/auth.component';

const appRoutes: Routes = [
	{
		path: '',
		component: Home
	},
	{
		path: 'auth',
		component: Auth
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
		path: '**',
		component: Home
	}
];

@NgModule({
	declarations: [],
	imports: [
    	RouterModule.forRoot(appRoutes)
    ],
	bootstrap: [],
	exports: [RouterModule] 
})

export class AppRoutingModule { }