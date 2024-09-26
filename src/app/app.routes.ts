import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import the login component

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Define route for the login page
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to login
  { path: '**', redirectTo: '/login' } // Wildcard route to catch invalid paths and redirect to login
];
