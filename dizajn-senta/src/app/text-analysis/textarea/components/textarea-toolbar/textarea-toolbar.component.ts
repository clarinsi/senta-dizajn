import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-textarea-toolbar',
  templateUrl: './textarea-toolbar.component.html',
  styleUrls: ['./textarea-toolbar.component.scss']
})
export class TextareaToolbarComponent {
  @Input() counter: boolean = false;
  @Input() editButton: boolean = false;
  @Input() cancelButton: boolean = false;
  @Input() copyButton: boolean = false;
  @Input() likeDislikeButton: boolean = false;
  @Input() currentText: string = ""

  @Output() onEditButtonClicked = new EventEmitter<void>();
  @Output() onCancelButtonClicked = new EventEmitter<void>();
}
