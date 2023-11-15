import {Component, Input} from '@angular/core';
import {ReactionsService} from "../../../services/reactions.service";

@Component({
  selector: 'app-textarea-like-dislike-button',
  templateUrl: './textarea-like-dislike-button.component.html',
  styleUrls: ['./textarea-like-dislike-button.component.scss']
})
export class TextareaLikeDislikeButtonComponent {
  @Input({required: true}) text!: string;

  hasReacted: boolean = false;

  constructor(private reactionsService: ReactionsService) {
  }

  like() {
    if (!this.hasReacted) {
      this.reactionsService.like(this.text)
        .then(() => this.hasReacted = true)
    }
  }

  dislike() {
    if (!this.hasReacted) {
      this.reactionsService.dislike(this.text)
        .then(() => this.hasReacted = true)
    }
  }
}
