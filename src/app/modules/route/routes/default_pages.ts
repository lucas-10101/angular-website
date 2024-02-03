import { Routes } from "@angular/router";
import { HomeComponent } from "../../../pages/home/home.component";
import { PageGuard } from "../../../guards/page.guard";
import { LoginComponent } from "../../../pages/login/login.component";

const DEFAULT_PAGES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
        data: {
            scope: 'PAGE_HOME',
            isPublic: true
        }
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent,
        canActivate: [PageGuard],
        data: {
            scope: 'PAGE_HOME',
            isPublic: false
        }
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
        canActivate: [PageGuard],
        data: {
            scope: 'PAGE_LOGIN',
            isPublic: true
        }
    }
];

export default DEFAULT_PAGES;