import {Component, ElementRef, ViewChild} from '@angular/core';
import {AnalyzerService} from "./services/analyzer.service";
import {TextAnalysisState} from "./enums/text-analysis-state.enum";
import {TextAnalysisModel} from "./models/text-analysis.model";
import {WordFilterModel} from "./models/word-filter.model";
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.scss']
})
export class TextAnalysisComponent {

  state!: TextAnalysisState;
  inputText!: string;
  analysis!: TextAnalysisModel | null;
  statusMessage!: string | null;
  simplifiedTextHasChanged!: boolean;
  inParallelMode!: boolean;
  highlightedComplexWords: WordFilterModel | null = null;
  highlightedSimplifiedWords: WordFilterModel | null = null;

  @ViewChild('markedWordsEl') markedWordsEl!: ElementRef;

  constructor(private analyzerService: AnalyzerService, private translocoService: TranslocoService) {
    this.setInitialValues()
  }

  setInitialValues() {
    this.state = TextAnalysisState.Initial;
    this.inputText = "";
    this.analysis = null;
    this.statusMessage = null
    this.simplifiedTextHasChanged = false;
    this.inParallelMode = true;
    this.highlightedComplexWords = null;
    this.highlightedSimplifiedWords = null;
  }

  analyze() {
    if (this.state === TextAnalysisState.Analyzing) {
      return;
    }

    this.state = TextAnalysisState.Analyzing;
    this.analysis = null;
    this.simplifiedTextHasChanged = false;

    this.analyzerService.simplify(this.inputText)
      .then((analysis) => {
        this.analysis = analysis;
        this.inputText = analysis.complexText;
        this.statusMessage = this.translocoService.translate('num_of_simplified_sentences', {value: analysis.numOfSimplifiedSentences})
        this.state = TextAnalysisState.Analyzed;
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      })
      .catch((_) => {
        this.state = TextAnalysisState.Error;
        this.setInitialValues();
        alert(this.translocoService.translate('error.generic'));
      })
  }

  refreshSimplifiedStats() {
    this.analysis!.simplifiedStats = null;

    if (!this.analysis?.simplifiedText) {
      return;
    }

    this.analyzerService.refreshStats(this.analysis!.simplifiedText)
      .then((newStats) => {
        this.analysis!.simplifiedStats = newStats;
      })
      .catch((_) => {
        alert(this.translocoService.translate('error.generic'));
      })
  }

  simplifiedTextChanged() {
    this.statusMessage = this.translocoService.translate('not_connected');
    this.simplifiedTextHasChanged = true;
  }

  showParallelMode(state: boolean) {
    this.inParallelMode = state;
  }

  announceToScreenReader(text: string) {
    this.markedWordsEl.nativeElement.textContent = text;
  }

  protected readonly State = TextAnalysisState;
}
