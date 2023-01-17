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
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return new Observable<boolean>((observable) =>
      this.userService.firebaseUser.subscribe({
        next: (firebaseUser) => {
          if (firebaseUser !== undefined) {
            observable.next(!!firebaseUser);
          }
        },
      })
    );
  }

  constructor(private userService: UserService) {
    this.userService = userService;
  }
}
