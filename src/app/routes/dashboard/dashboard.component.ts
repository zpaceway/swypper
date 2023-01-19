import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { User } from 'firebase/auth';
import Task from 'src/interfaces/Task';
import { UserService } from 'src/app/services/user.service';
import UserData from 'src/interfaces/UserData';
import { createTask, updateTask } from 'src/firebase/db/tasks';
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
  tasks: Task[] = [];
  showAddTaskMenu: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.user = this.userService.firebaseUser;
    this.userData = this.userService.userData;
    this.tasks = this.userService.tasks;
  }

  getFormattedDate() {
    return `${format(this.now, 'EEEE,')}\n${format(this.now, 'dd MMMM')}`;
  }

  async toggleItem(taskId: string) {
    this.tasks = await Promise.all(
      this.tasks.map(async (task) => {
        if (taskId === task.id) {
          task.checked = !task.checked;
          await updateTask(this.user!.uid, task.id, {
            checked: task.checked,
          });
        }
        return task;
      })
    );
  }

  async signOutUser() {
    await signOut();
    await this.router.navigate(['auth']);
  }

  async toggleShowAddTaskMenu() {
    this.showAddTaskMenu = !this.showAddTaskMenu;
    this.changeDetectorRef.detectChanges();
  }

  async onAdd(task: Omit<Task, 'id'>) {
    if (this.user) {
      this.tasks.push(await createTask(this.user.uid, task));
    }
    this.showAddTaskMenu = false;
  }
}
