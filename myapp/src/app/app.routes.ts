import { Routes } from '@angular/router';
import { Home } from '../Layout/home/home';
import { AdminLogin } from '../SmartComponent/admin-login/admin-login';
import { AdminDashboard } from '../SmartComponent/admin-dashboard/admin-dashboard';

export const routes: Routes = [
    {path: '', component:Home},
    {path:'home', component: Home},
    {path: 'admin-login', component: AdminLogin},
    {path: 'admin-dashboard', component: AdminDashboard }
];
