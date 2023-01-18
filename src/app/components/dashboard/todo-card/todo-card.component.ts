import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() fontAwesomeIcon: string = '';
  @Input() checked: boolean = false;
  @Output() toggle: EventEmitter<void> = new EventEmitter();

  onToggle() {
    this.toggle.emit();
  }
}
