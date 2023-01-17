import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { User } from 'firebase/auth';
import TodoItem from 'src/interfaces/TodoItem';
import { UserService } from 'src/app/services/user.service';
import UserData from 'src/interfaces/UserData';
import { updateTodoItem } from 'src/firebase/db/todoItems';
import { signOut } from 'src/firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user?: User | null;
  userData: UserData | null = null;
  now: Date = new Date();
  todoItems: TodoItem[] = [];
  showAddTodoItemMenu: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    this.user = this.userService.firebaseUser;
    this.userData = this.userService.userData;
    this.todoItems = this.userService.todoItems;
  }

  getFormattedDate() {
    return `${format(this.now, 'EEEE,')}\n${format(this.now, 'dd MMMM')}`;
  }

  async toggleItem(todoItemId: string) {
    this.todoItems = await Promise.all(
      this.todoItems.map(async (todoItem) => {
        if (todoItemId === todoItem.id) {
          todoItem.checked = !todoItem.checked;
          await updateTodoItem(this.user!.uid, todoItem.id, {
            checked: todoItem.checked,
          });
        }
        return todoItem;
      })
    );
  }

  async signOutUser() {
    await signOut();
    await this.router.navigate(['auth']);
  }

  async toggleShowAddTodoItemMenu() {
    this.showAddTodoItemMenu = !this.showAddTodoItemMenu;
  }
}
