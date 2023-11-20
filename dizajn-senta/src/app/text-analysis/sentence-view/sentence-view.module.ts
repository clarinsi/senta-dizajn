import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SentenceViewComponent} from "./sentence-view.component";
import {FormsModule} from "@angular/forms";
import {SentenceInputComponent} from './components/sentence-input/sentence-input.component';
import {DirectivesModule} from "../../directives/directives.module";
import {SentenceEditButtonComponent} from './components/sentence-edit-button/sentence-edit-button.component';
import {SentenceRevertButtonComponent} from './components/sentence-revert-button/sentence-revert-button.component';
import {SentenceCancelButtonComponent} from './components/sentence-cancel-button/sentence-cancel-button.component';
import {StatisticsComponent} from "../components/statistics/statistics.component";
import {TranslocoModule} from "@ngneat/transloco";

@NgModule({
  declarations: [
    SentenceViewComponent,
    SentenceInputComponent,
    SentenceEditButtonComponent,
    SentenceRevertButtonComponent,
    SentenceCancelButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    StatisticsComponent,
    TranslocoModule,
  ],
  exports: [
    SentenceViewComponent
  ],
})
export class SentenceViewModule {
}
