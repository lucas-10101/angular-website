import { Injectable } from '@angular/core';
import { User, ANONYMOUS_USER } from '../models/user';

interface Context {
  readonly currentUser: User;
  readonly sessionStartedAt: Date;
  validUntil: Date
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private context: Context;

  constructor() {
    this.context = this.getInitialContext();
  }

  public getCurrentUser(): User {
    return this.context.currentUser;
  }

  public isLoggedIn(): boolean {
    return this.context.currentUser != null && this.context.currentUser.enabled && this.context.validUntil.getTime() > Date.now();
  }

  public canAccess(scope: string, isPublicRoute = false, role?: string): boolean {
    return this.isLoggedIn() && (
      isPublicRoute || this.context.currentUser.permissions.filter((permission) => {
        return scope === permission.scope && (
          role === undefined || permission.roles.filter((permissionRole) => permissionRole === role).length > 0
        )
      }).length > 0
    );
  }

  public reset() {
    this.context = this.getInitialContext();
  }

  public getInitialContext(): Context {
    return {
      currentUser: ANONYMOUS_USER,
      sessionStartedAt: new Date(),
      validUntil: new Date(Date.now() + 1000 * 60 * 10)
    };
  }
}
