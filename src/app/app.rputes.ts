import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routeConfig: Routes = [
    { 
    path: '', component: HomeComponent, title: 'Home page', }, 
]
export default routeConfig;