import { RouterModule, Routes }  from "@angular/router";

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoutes: Routes = [
  { path: '',
    component:PagesComponent,
    children: [
      { path: 'dashboard', component:DashboardComponent },
      { path: 'progress', component:ProgressComponent },
      { path: 'graphics1', component:Graphics1Component },
      // Ruta vacia
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },

  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },



  // Ruta diferente
  { path: '**', component:NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes);
