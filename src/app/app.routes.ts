import { RouterModule, Routes }  from "@angular/router";

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoutes: Routes = [


  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },



  // Ruta diferente
  { path: '**', component:NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes);
