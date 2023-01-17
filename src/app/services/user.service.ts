import { Injectable, OnDestroy } from '@angular/core';
import { Unsubscribe, User } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { auth } from 'src/firebase';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  firebaseUser: BehaviorSubject<User | null | undefined> = new BehaviorSubject<
    User | null | undefined
  >(undefined);
  unsubscribe: Unsubscribe;
  isAuthenticated: boolean = false;

  constructor() {
    this.unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      this.firebaseUser.next(firebaseUser);
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
