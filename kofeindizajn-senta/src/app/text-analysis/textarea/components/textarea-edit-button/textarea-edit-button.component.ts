import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-textarea-edit-button',
  templateUrl: './textarea-edit-button.component.html',
  styleUrls: ['./textarea-edit-button.component.scss']
})
export class TextareaEditButtonComponent {
  @Output() onClick = new EventEmitter<void>();
}
