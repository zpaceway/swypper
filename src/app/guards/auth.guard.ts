import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
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
      this.userService.firebaseUser$.subscribe({
        next: async (firebaseUser) => {
          if (firebaseUser !== undefined) {
            const isAuthenticated = !!firebaseUser;
            if (!isAuthenticated) {
              await this.router.navigate(['/auth']);
            }
            observable.next(isAuthenticated);
          }
        },
      })
    );
  }

  constructor(private userService: UserService, private router: Router) {}
}
