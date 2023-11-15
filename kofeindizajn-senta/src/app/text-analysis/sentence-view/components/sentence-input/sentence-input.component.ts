import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sentence-input',
  templateUrl: './sentence-input.component.html',
  styleUrls: ['./sentence-input.component.scss']
})
export class SentenceInputComponent {
  @Input({required: true}) sentence!: string;
  @Input({required: true}) complexSentence!: string;
  @Output() sentenceChange = new EventEmitter<string>();

  inEditMode: boolean = false;
  componentId: string;

  @ViewChild('textarea') textarea!: ElementRef;

  constructor() {
    this.componentId = 'textarea-' + Math.random().toString(36).substring(2);
  }

  ngAfterViewInit() {
    this.setTextAreaHeight()
  }

  applyChanges(newSentence: string) {
    this.inEditMode = false;
    this.sentence = newSentence;
    this.sentenceChange.emit(newSentence)
  }

  cancelChanges(textarea: HTMLTextAreaElement) {
    this.inEditMode = false;
    textarea.value = this.sentence;
  }

  revert(textarea: HTMLTextAreaElement) {
    textarea.value = this.complexSentence;
    this.setTextAreaHeight()
  }

  startEditing() {
    this.inEditMode = true;
    this.setTextAreaHeight()
    setTimeout(() => this.textarea.nativeElement.focus(), 0)
  }

  setTextAreaHeight() {
    // @see https://stackoverflow.com/a/25621277
    const el = this.textarea.nativeElement;
    el.style.height = 0;
    el.style.height = `${el.scrollHeight}px`;
  }
}
