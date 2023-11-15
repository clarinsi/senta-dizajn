import {Injectable} from '@angular/core';
import {TextAnalysisModel} from "../models/text-analysis.model";
import {environment} from "../../../environments/environment";
import {StatisticsModel} from "../models/statistics.model";
import {FilterService} from "./filter.service";

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {
  constructor(private filterService: FilterService) {
  }

  async simplify(text: string): Promise<TextAnalysisModel> {
    try {
      const url = `${environment.apiUrl}${environment.simplifyEndpoint}`

      const response = await fetch(url, {
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          text: text,
        }),
      })

      const data = await response.json();

      const complexLongWords = await this.filterService.getLongWords(text);
      const simplifiedLongWords = await this.filterService.getLongWords(data["simplified_text"]);

      data["complex_long_words"] = complexLongWords;
      data["simplified_long_words"] = simplifiedLongWords;

      return new TextAnalysisModel(data);
    } catch (e) {
      throw e;
    }
  }

  async refreshStats(text: string): Promise<StatisticsModel> {
    try {
      const url = `${environment.apiUrl}${environment.refreshStatsEndpoint}`

      const response = await fetch(url, {
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          text: text,
        }),
      })

      const data = await response.json();

      const longWords = await this.filterService.getLongWords(text);

      return {
        generalWords: data["general_words"],
        textbookWords: data["textbook_words"],
        numOfWords: data["num_of_words"],
        numOfSentences: data["num_of_sentences"],
        numOfCharacters: data["num_of_characters"],
        wordsNotOnGeneralPercent: data["percent_not_on_general"],
        wordsNotOnTextbookPercent: data["percent_not_on_textbook"],
        longWords: longWords,
      };
    } catch (e) {
      throw e;
    }
  }
}
