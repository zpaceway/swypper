import { Injectable, OnDestroy } from '@angular/core';
import { Unsubscribe, User } from 'firebase/auth';
import { Subject } from 'rxjs';
import { auth } from 'src/firebase';
import { getTasksByUserId } from 'src/firebase/db/tasks';
import { getOrCreateUserData } from 'src/firebase/db/users';
import Task from 'src/interfaces/Task';
import UserData from 'src/interfaces/UserData';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  firebaseUser$: Subject<User | null | undefined> = new Subject<
    User | null | undefined
  >();
  firebaseUser?: User | null;
  unsubscribe: Unsubscribe;
  userData: UserData | null = null;
  tasks: Task[] = [];
  isAuthenticated: boolean = false;

  constructor() {
    this.unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      [this.userData, this.tasks] = await Promise.all([
        await getOrCreateUserData(firebaseUser),
        await getTasksByUserId(firebaseUser?.uid),
      ]);
      this.firebaseUser = firebaseUser;
      this.firebaseUser$.next(firebaseUser);
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
