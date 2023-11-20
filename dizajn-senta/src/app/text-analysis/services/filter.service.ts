import {Injectable} from '@angular/core';
import {WordFilterModel} from "../models/word-filter.model";
import {environment} from "../../../environments/environment";
import {Subject} from "rxjs";
import {FilterType} from "../enums/filter-type.enum";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  longWordsThreshold: string = `${environment.longWordsDefaultLength}`;
  longWordsThresholdChange = new Subject<string>();
  filter: FilterType | null;
  filterChange = new Subject<FilterType | null>();

  constructor() {
    this.filter = null;
    this.longWordsThresholdChange.subscribe(threshold => this.longWordsThreshold = threshold);
    this.filterChange.subscribe(filter => this.filter = filter);
  }

  updateLongWordsThreshold(newThreshold: string) {
    this.longWordsThresholdChange.next(newThreshold);
  }

  toggle(filter: FilterType) {
    if (this.filter === filter) {
      this.filterChange.next(null);
    } else {
      this.filterChange.next(filter);
    }
  }

  hide() {
    this.filterChange.next(null);
  }

  async getLongWords(text: string) {
    try {
      const url = `${environment.apiUrl}${environment.longWordsEndpoint}`

      const response = await fetch(url, {
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          text: text,
          length: this.longWordsThreshold,
        }),
      })

      try {
        const data = await response.json() as string[];

        return data.reduce((result: WordFilterModel, word: string) => {
          result[word] = false;
          return result;
        }, {});
      } catch (_) {
        return {};
      }
    } catch (e) {
      throw e;
    }
  }
}
