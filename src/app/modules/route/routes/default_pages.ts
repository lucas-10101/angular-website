import { Routes } from "@angular/router";
import { HomeComponent } from "../../../pages/home/home.component";
import { pageGuard } from "../../../guards/page.guard";
import { LoginComponent } from "../../../pages/login/login.component";

const DEFAULT_PAGES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
        data: {
            role: 'PAGE_LOGIN',
            isPublic: true
        }
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent,
        canActivate: [pageGuard],
        data: {
            role: 'PAGE_HOME'
        }
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
        canActivate: [pageGuard],
        data: {
            role: 'PAGE_LOGIN',
            isPublic: true
        }
    }
];

export default DEFAULT_PAGES;