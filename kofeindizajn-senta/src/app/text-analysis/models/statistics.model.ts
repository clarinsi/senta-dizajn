import {WordFilterModel} from "./word-filter.model";

export interface StatisticsModel {
  numOfWords: number;
  numOfSentences: number;
  numOfCharacters: number;
  wordsNotOnGeneralPercent: number;
  wordsNotOnTextbookPercent: number;
  generalWords: WordFilterModel;
  textbookWords: WordFilterModel;
  longWords: WordFilterModel;
}
