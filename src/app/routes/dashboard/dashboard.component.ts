import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user: User;

  constructor(private userService: UserService) {
    this.userService = userService;
    this.user = userService.user!;
  }
}
