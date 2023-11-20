import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-textarea-start-over-button',
  templateUrl: './textarea-start-over-button.component.html',
  styleUrls: ['./textarea-start-over-button.component.scss']
})
export class TextareaStartOverButtonComponent {
  restart() {
    window.location.reload()
  }
}
