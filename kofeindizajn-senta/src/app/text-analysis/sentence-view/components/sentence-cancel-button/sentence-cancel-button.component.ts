import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sentence-cancel-button',
  templateUrl: './sentence-cancel-button.component.html',
  styleUrls: ['./sentence-cancel-button.component.scss']
})
export class SentenceCancelButtonComponent {
  @Output() onClick = new EventEmitter<void>();
}
