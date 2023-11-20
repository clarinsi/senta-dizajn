import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {StatisticsModel} from "../../models/statistics.model";
import {WordLengthFilterComponent} from "../word-length-filter/word-length-filter.component";
import {FilterService} from "../../services/filter.service";
import {WordFilterModel} from "../../models/word-filter.model";
import {RouterLink} from "@angular/router";
import {FilterType} from "../../enums/filter-type.enum";
import {TranslocoModule} from "@ngneat/transloco";

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, WordLengthFilterComponent, RouterLink, TranslocoModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
  @Input({required: true}) caption!: string;
  @Input({required: true}) stats!: StatisticsModel;
  @Input({required: true}) text!: string;
  @Input() showFilters: boolean = false;

  @Output() highlightWords = new EventEmitter<WordFilterModel | null>();

  longWordsThreshold;

  constructor(private filterService: FilterService) {
    this.longWordsThreshold = filterService.longWordsThreshold;

    this.filterService.longWordsThresholdChange.subscribe(threshold => {
      this.longWordsThreshold = threshold;
      this.filterService.getLongWords(this.text)
        .then(words => {
          this.stats.longWords = words
          if (this.isEnabled(FilterType.LongWords)) {
            this.highlightWords.emit(words);
          } else {
            this.filterService.hide();
          }
        });
    });

    this.filterService.filterChange.subscribe(filter => {
      switch (filter) {
        case FilterType.LongWords:
          this.highlightWords.emit(this.stats.longWords);
          break;
        case FilterType.TextbookWords:
          this.highlightWords.emit(this.stats.textbookWords);
          break;
        case FilterType.GeneralWords:
          this.highlightWords.emit(this.stats.generalWords);
          break;
        default:
          this.highlightWords.emit(null);
          break;
      }
    });
  }

  get numOfLongWords() {
    return Object.keys(this.stats.longWords).length;
  }

  isEnabled(filter: FilterType) {
    return this.filterService.filter === filter;
  }

  updateLongWordsThreshold(value: string) {
    this.filterService.updateLongWordsThreshold(value);
  }

  toggleFilter(filter: FilterType) {
    this.filterService.toggle(filter);
  }

  protected readonly FilterType = FilterType;
}
