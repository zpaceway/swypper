import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return !!(await this.userService.getUser());
  }

  constructor(private userService: UserService) {
    this.userService = userService;
  }
}
