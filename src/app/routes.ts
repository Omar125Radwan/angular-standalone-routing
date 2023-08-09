import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent),
  },
];
