import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-word-length-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './word-length-filter.component.html',
  styleUrls: ['./word-length-filter.component.scss']
})
export class WordLengthFilterComponent {
  @Input() selected: string = "";
  @Output() selectedChange = new EventEmitter<string>();

  componentId!: string;

  constructor() {
    this.componentId = 'filter-' + Math.random().toString(36).substring(2);
  }
}
