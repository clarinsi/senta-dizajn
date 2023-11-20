import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sentence-revert-button',
  templateUrl: './sentence-revert-button.component.html',
  styleUrls: ['./sentence-revert-button.component.scss']
})
export class SentenceRevertButtonComponent {
  @Output() onClick = new EventEmitter<void>();
}
