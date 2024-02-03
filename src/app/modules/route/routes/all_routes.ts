/**
 * Used to merge all declared routes in order to return an full route list to RouterModule.forRoot in application RouteModule.
 * 
 * 
 * You can`t declare routes here, just join any sub group of routes in this file to use the function validator rules over any route declaration file/list.
 */

import { Routes } from "@angular/router";
import DEFAULT_PAGES from "./default_pages";


/**
 * Check if required custom properties are given on route definition.
 * 
 * @param routes route list
 * @returns the same route validated, no transformation was made
 */
const checkRequiredCustomProperties = (routes: Routes): Routes => {
    routes.forEach((route) => {

        let isPublicProperty: boolean | undefined = route.data?.['isPublic'];
        let scopeProperty: string | undefined = route.data?.['scope'];

        let declaredGuards: any[] | undefined = route.canActivate;
        let redirectTo: string | undefined = route.redirectTo;

        if (isPublicProperty === undefined || scopeProperty === undefined) {
            throw new Error(`Must declare isPublic and scope properties on field data inside route definition, route path is: ${route.path}`);
        } else if (isPublicProperty == false && scopeProperty == '') {
            throw new Error(`The scope must be informed if route is not public, route path is: ${route.path}`);
        }

        if ((declaredGuards === undefined || declaredGuards.length === 0) && redirectTo == undefined) {
            throw new Error(`An guard must be specified in the route if redirectTo is not present, route path is: ${route.path}`);
        }
    });

    return routes;
};

const ALL_ROUTES: Routes = [
    ...checkRequiredCustomProperties(DEFAULT_PAGES)
];

export default ALL_ROUTES;
