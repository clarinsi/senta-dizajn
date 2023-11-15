import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TextAnalysisModel} from "../models/text-analysis.model";

@Component({
  selector: 'app-sentence-view',
  templateUrl: './sentence-view.component.html',
  styleUrls: ['./sentence-view.component.scss']
})
export class SentenceViewComponent {
  @Input({required: true}) analysis: TextAnalysisModel | null = null;

  @Output() onChange = new EventEmitter<string>();
  @Output() onRefreshStats = new EventEmitter<void>();

  get sentences() {
    if (!this.analysis) {
      return [];
    }

    const numberOfSentences = Math.min(
      this.analysis!.complexSentences.length,
      this.analysis!.simplifiedSentences.length
    );

    return Array(numberOfSentences).fill(1).map((_, i) => i);
  }
}
