import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-textarea-copy-button',
  templateUrl: './textarea-copy-button.component.html',
  styleUrls: ['./textarea-copy-button.component.scss']
})
export class TextareaCopyButtonComponent {
  @Input({required: true}) text!: string;

  isCopied: boolean = false;

  copyText() {
    navigator.clipboard.writeText(this.text)
      .then(() => {
        this.isCopied = true;
        setTimeout(() => this.isCopied = false, 2000);
      })
  }
}
