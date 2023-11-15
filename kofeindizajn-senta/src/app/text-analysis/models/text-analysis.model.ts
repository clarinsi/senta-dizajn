import {StatisticsModel} from "./statistics.model";

export class TextAnalysisModel {
  complexText: string;
  complexSentences: string[];
  complexStats: StatisticsModel | null;

  simplifiedText: string;
  simplifiedSentences: string[];
  simplifiedStats: StatisticsModel | null;

  numOfSimplifiedSentences: number;

  constructor(json: any) {
    this.complexText = json["complex_text"];
    this.complexSentences = json["complex_sentences"];
    this.complexStats = {
      generalWords: json["complex_general_words"],
      textbookWords: json["complex_textbook_words"],
      numOfWords: json["complex_num_of_words"],
      numOfSentences: json["complex_num_of_sentences"],
      numOfCharacters: json["complex_num_of_characters"],
      wordsNotOnGeneralPercent: json["complex_percent_not_on_general"],
      wordsNotOnTextbookPercent: json["complex_percent_not_on_textbook"],
      longWords: json["complex_long_words"],
    };

    this.simplifiedText = json["simplified_text"];
    this.simplifiedSentences = json["simplified_sentences"];
    this.simplifiedStats = {
      generalWords: json["simplified_general_words"],
      textbookWords: json["simplified_textbook_words"],
      numOfWords: json["simplified_num_of_words"],
      numOfSentences: json["simplified_num_of_sentences"],
      numOfCharacters: json["simplified_num_of_characters"],
      wordsNotOnGeneralPercent: json["simplified_percent_not_on_general"],
      wordsNotOnTextbookPercent: json["simplified_percent_not_on_textbook"],
      longWords: json["simplified_long_words"],
    };

    this.numOfSimplifiedSentences = json["is_sentence_simplified_num"];
  }
}
