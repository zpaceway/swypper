import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant?: 'primary' | 'secondary' = 'primary';
  @Input() fullWidth?: boolean = false;
}
