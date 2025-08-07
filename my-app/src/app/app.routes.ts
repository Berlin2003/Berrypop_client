import { Routes } from '@angular/router';
import { IdentityComponent } from './header/identity/identity.component';
import { HomeComponent } from './home/home.component';
import { PotentialComponent } from './header/potential/potential.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './auth/login/login.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    {
        path:'', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path:'home', component:HomeComponent
    },
    {
        path:'identity' , component:IdentityComponent
    },
    {
        path:'potential' , component:PotentialComponent
    },
    {
        path:'contactus' , component:ContactusComponent
    },
    { 
        path: 'login', component: LoginComponent 
    },
    {
        path: 'dashboard', component: SuperAdminComponent
    },
    {
        path: 'register' , component: RegisterComponent
    }
];
