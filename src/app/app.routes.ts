import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';
import { PruebaComponent } from './pages/prueba/prueba.component';



export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'prueba', component: PruebaComponent },
    { path: 'project/:id', component: SingleProjectComponent },
];
