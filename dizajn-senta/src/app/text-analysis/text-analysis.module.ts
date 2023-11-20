import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirectivesModule} from "../directives/directives.module";
import {TextAnalysisComponent} from "./text-analysis.component";
import {FormsModule} from "@angular/forms";
import {DisplayModeButtonComponent} from './components/display-mode-button/display-mode-button.component';
import {TextareaModule} from './textarea/textarea.module';
import {SentenceViewModule} from './sentence-view/sentence-view.module';
import {TextAnalysisToolbarComponent} from './components/text-analysis-toolbar/text-analysis-toolbar.component';
import {TranslocoRootModule} from "../transloco-root.module";

@NgModule({
  declarations: [
    TextAnalysisComponent,
    DisplayModeButtonComponent,
    TextAnalysisToolbarComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    TextareaModule,
    SentenceViewModule,
    TranslocoRootModule,
  ]
})
export class TextAnalysisModule {
}
