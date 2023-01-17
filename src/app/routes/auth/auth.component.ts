import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithFacebook, signInWithGoogle } from 'src/firebase/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(private router: Router) {
    this.router = router;
  }

  async handleSignInWithGoogle() {
    await signInWithGoogle();
    this.router.navigate(['/dashboard']);
  }
  async handleSignInWithFacebook() {
    await signInWithFacebook();
    this.router.navigate(['/dashboard']);
  }
}
