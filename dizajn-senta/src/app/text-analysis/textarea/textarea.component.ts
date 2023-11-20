import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {EditModeService} from "./edit-mode.service";
import {StatisticsModel} from "../models/statistics.model";
import {WordFilterModel} from "../models/word-filter.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextareaComponent {
  @Input({required: true}) value!: string;
  @Input({required: true}) label!: string;
  @Input({required: true}) submitButtonText!: string;
  @Input({required: true}) sentences?: string[];
  @Input() disabled: boolean = false;
  @Input() canHoverSentences: boolean = false;
  @Input() showToolbar: boolean = false;
  @Input() showCounter: boolean = false;
  @Input() showLikeDislike: boolean = false;
  @Input() showFilters: boolean = true;
  @Input() showExampleText: boolean = false;
  @Output() announceToScreenReader = new EventEmitter<string>();
  @Input() placeholder: string = "";
  @Input() showStartOver: boolean = false;
  @Input() stats: StatisticsModel | null = null;

  @Output() valueChange = new EventEmitter<string>();
  @Output() reanalyze = new EventEmitter<void>();
  @Output() onStartEditing = new EventEmitter<void>();

  componentId: string;
  highlightedWords: WordFilterModel | null = null

  @ViewChild('textareaElement') textareaElement: ElementRef | null = null;
  @ViewChild('fakeTextareaElement') fakeTextareaElement: ElementRef | null = null;

  constructor(private editModeService: EditModeService) {
    this.componentId = 'textarea-' + Math.random().toString(36).substring(2);
  }

  get inEditMode() {
    return this.editModeService.idOfElementInEditing === this.componentId;
  }

  get htmlValue() {
    if (this.highlightedWords) {
      return this.highlightFilteredWords();
    }

    if (this.sentences) {
      return this.sentences.map(sentence => `<span class="sentence">${sentence}</span>`).join(' ');
    }

    return this.value;
  }

  highlightFilteredWords() {
    const words = this.value.match(/\p{L}+|\P{L}+/gu);

    if (!words || words.length <= 0) return this.value;

    const markedWords = words.reduce((result: string[], word: string) => {
      if (word in this.highlightedWords! && this.highlightedWords![word] === false) {
        result.push(`<mark>${word}</mark>`);
      } else {
        result.push(word);
      }
      return result;
    }, [])

    const wordsToAnnounce = Object.keys(this.highlightedWords ?? []).filter(key => this.highlightedWords![key] === false)
    this.announceToScreenReader.emit(wordsToAnnounce.join(", "));

    return markedWords.join("");
  }

  setEditMode(state: boolean) {
    if (state) {
      this.onStartEditing.emit();
      this.editModeService.activate(this.componentId)
      setTimeout(() => this.textareaElement!.nativeElement.focus(), 0)
    } else {
      this.editModeService.deactivate()
    }
  }

  cancelChanges() {
    this.setEditMode(false);
    this.textareaElement!.nativeElement.value = this.value;
  }

  applyChanges() {
    this.value = this.textareaElement!.nativeElement.value;
    if (this.inEditMode) {
      this.setEditMode(false);
      this.sentences = undefined;
    }
    this.valueChange.emit(this.value);
  }

  @HostListener('window:keyup.esc', ['$event'])
  onKeypress(event: KeyboardEvent) {
    if (this.inEditMode) {
      return this.setEditMode(false);
    }
  }

  highlightHoveredSentences(target: EventTarget | null) {
    const hoveredClass = "sentence--hovered"

    if (target instanceof HTMLElement && this.canHoverSentences && !this.highlightedWords && target.className === "sentence") {
      const sentenceIndex = Array.from(this.fakeTextareaElement?.nativeElement.children).findIndex(el => el === target);

      if (sentenceIndex >= 0) {
        this.removeHighlightFromHoveredSentences()
        document.querySelectorAll('.fake-textarea').forEach(textarea => {
          textarea.children.item(sentenceIndex)?.classList.add(hoveredClass);
        })
      }
    }
  }

  removeHighlightFromHoveredSentences() {
    const hoveredClass = "sentence--hovered"
    document.querySelectorAll(`.${hoveredClass}`).forEach(element => element.classList.remove(hoveredClass));
  }

  insertExampleText() {
    this.value = environment.exampleText;
    this.valueChange.emit(this.value);
  }
}
