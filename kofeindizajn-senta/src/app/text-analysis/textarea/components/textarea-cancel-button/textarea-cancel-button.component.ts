import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-textarea-cancel-button',
  templateUrl: './textarea-cancel-button.component.html',
  styleUrls: ['./textarea-cancel-button.component.scss']
})
export class TextareaCancelButtonComponent {
  @Output() onClick = new EventEmitter<void>();
}
