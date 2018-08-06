import { Routes, RouterModule } from "../../../node_modules/@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graphics1Component } from "./graphics1/graphics1.component";


const pagesRoutes:  Routes = [
    { path: '',
    component:PagesComponent,
    children: [
      { path: 'dashboard', component:DashboardComponent },
      { path: 'progress', component:ProgressComponent },
      { path: 'graphics1', component:Graphics1Component },
      // Ruta vacia
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);