import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const PageGuard: CanActivateFn = (route, state) => {

  let authService = inject(AuthService);
  let scope = route.routeConfig?.data?.['scope'];
  let isPublic = route.routeConfig?.data?.['isPublic'] === true;
  let canAccess = authService.canAccess(`${scope}`, isPublic);

  if (!canAccess)
    inject(Router).navigate(['login'])

  return canAccess;
};
