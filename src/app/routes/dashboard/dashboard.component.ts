import { Component } from '@angular/core';
import { format } from 'date-fns';
import { User } from 'firebase/auth';
import { UserService } from 'src/app/services/user.service';

interface TodoItem {
  id: string;
  title: string;
  description: string;
  checked: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user?: User | null;
  now: Date = new Date();
  todoItems: TodoItem[] = [
    {
      id: '1',
      title: 'Work',
      description: "Don't forget to work! Check this when done",
      checked: true,
    },
    {
      id: '2',
      title: 'Learn Angular',
      description: 'Always learn angular',
      checked: false,
    },
    {
      id: '3',
      title: 'Sleep',
      description: 'Take some time to rest',
      checked: true,
    },
  ];

  constructor(private userService: UserService) {
    this.userService = userService;
    userService.firebaseUser.subscribe({
      next: (firebaseUser) => {
        this.user = firebaseUser;
      },
    });
  }

  getFormattedDate() {
    return `${format(this.now, 'EEEE,')}\n${format(this.now, 'dd MMMM')}`;
  }

  toggleItem(todoItemId: string) {
    this.todoItems = this.todoItems.map((todoItem) => {
      if (todoItemId === todoItem.id) {
        todoItem.checked = !todoItem.checked;
      }
      return todoItem;
    });
  }
}
