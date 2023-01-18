import { Component, EventEmitter, Output } from '@angular/core';
import TodoItem from 'src/interfaces/TodoItem';

@Component({
  selector: 'app-add-new-todo-item',
  templateUrl: './add-new-todo-item.component.html',
  styleUrls: ['./add-new-todo-item.component.scss'],
})
export class AddNewTodoItemComponent {
  @Output() add: EventEmitter<Omit<TodoItem, 'id'>> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  title: string = '';
  description: string = '';
  fontAwesomeIcon: string = '';
  checked: boolean = false;

  onAdd() {
    this.add.emit({
      title: this.title,
      description: this.description,
      fontAwesomeIcon: this.fontAwesomeIcon,
      checked: this.checked,
    });
  }

  onCancel() {
    this.cancel.emit();
  }
}
