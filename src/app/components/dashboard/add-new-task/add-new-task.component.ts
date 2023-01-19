import { Component, EventEmitter, Output } from '@angular/core';
import { Timestamp } from 'firebase/firestore';
import Task from 'src/interfaces/Task';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss'],
})
export class AddNewTaskComponent {
  @Output() add: EventEmitter<Omit<Task, 'id'>> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  title: string = '';
  description: string = '';
  type = '';
  category = '';

  onAdd() {
    const task: Omit<Task, 'id'> = {
      title: this.title,
      category: this.category,
      description: this.description,
      type: this.type,
      createdAt: Timestamp.now(),
      checked: false,
    };
    this.add.emit(task);
  }

  onCancel() {
    this.cancel.emit();
  }
}
