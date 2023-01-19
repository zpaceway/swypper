import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  faBriefcase,
  faHeart,
  faHeadset,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import Task from 'src/interfaces/Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input()
  task!: Task;
  @Output() toggle: EventEmitter<void> = new EventEmitter();

  icons: Record<string, IconDefinition> = {
    work: faBriefcase,
    live: faHeart,
    gaming: faHeadset,
  };

  onToggle() {
    this.toggle.emit();
  }
}
