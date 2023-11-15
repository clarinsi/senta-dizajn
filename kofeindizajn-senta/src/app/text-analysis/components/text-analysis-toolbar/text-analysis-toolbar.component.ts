import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TextAnalysisModel} from "../../models/text-analysis.model";

@Component({
  selector: 'app-text-analysis-toolbar',
  templateUrl: './text-analysis-toolbar.component.html',
  styleUrls: ['./text-analysis-toolbar.component.scss']
})
export class TextAnalysisToolbarComponent {
  @Input({required: true}) analysis!: TextAnalysisModel;
  @Input() status: string | null = null;
  @Input() canChangeDisplayMode: boolean = true;

  @Output() toggleDisplayMode = new EventEmitter<boolean>();
}
