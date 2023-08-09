import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';



export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'project/:id', component: SingleProjectComponent },
];
