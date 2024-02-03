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
    return this.context.currentUser != null && this.context.currentUser.enabled && this.context.validUntil.getMilliseconds() > Date.now();
  }

  public canAccess(requiredRole: string): boolean {
    return this.isLoggedIn() && this.context.currentUser.roles.filter((role, index, roles) => role == requiredRole).length > 0;
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
