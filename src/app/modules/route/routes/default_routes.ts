import { Routes } from "@angular/router";
import { HomeComponent } from "../../../components/home/home.component";

const DEFAULT_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    }
];

export default DEFAULT_ROUTES;