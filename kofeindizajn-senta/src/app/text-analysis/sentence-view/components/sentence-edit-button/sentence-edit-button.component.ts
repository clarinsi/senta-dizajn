import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sentence-edit-button',
  templateUrl: './sentence-edit-button.component.html',
  styleUrls: ['./sentence-edit-button.component.scss']
})
export class SentenceEditButtonComponent {
  @Output() onClick = new EventEmitter<void>();
}
