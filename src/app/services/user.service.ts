import { Injectable, OnDestroy } from '@angular/core';
import { Unsubscribe, User } from 'firebase/auth';
import { auth } from 'src/firebase';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  user?: User | null;
  unsubscribe: Unsubscribe;
  isAuthenticated: boolean = false;

  constructor() {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  async getUser() {
    await new Promise((res, rej) => {
      const interval = setInterval(() => {
        if (this.user !== undefined) {
          clearInterval(interval);
          res(null);
        }
      }, 500);
    });
    return this.user;
  }
}
