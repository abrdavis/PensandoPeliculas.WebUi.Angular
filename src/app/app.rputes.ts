import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./guards/auth.guard";

const routeConfig: Routes = [
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
    { path: '', component: HomeComponent, title: 'Home page', }, 
    { path: 'login', component: LoginComponent, title: 'Login page', }, 
]
export default routeConfig;