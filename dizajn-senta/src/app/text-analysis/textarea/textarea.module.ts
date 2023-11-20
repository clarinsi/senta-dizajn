import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextareaComponent} from './textarea.component';
import {FormsModule} from "@angular/forms";
import {TextareaCancelButtonComponent} from "./components/textarea-cancel-button/textarea-cancel-button.component";
import {TextareaCopyButtonComponent} from "./components/textarea-copy-button/textarea-copy-button.component";
import {TextareaEditButtonComponent} from "./components/textarea-edit-button/textarea-edit-button.component";
import {TextareaLikeDislikeButtonComponent} from "./components/textarea-like-dislike-button/textarea-like-dislike-button.component";
import {TextareaStartOverButtonComponent} from "./components/textarea-start-over-button/textarea-start-over-button.component";
import {TextareaToolbarComponent} from "./components/textarea-toolbar/textarea-toolbar.component";
import {DirectivesModule} from "../../directives/directives.module";
import {StatisticsComponent} from "../components/statistics/statistics.component";
import {TranslocoRootModule} from "../../transloco-root.module";


@NgModule({
  declarations: [
    TextareaComponent,
    TextareaCancelButtonComponent,
    TextareaCopyButtonComponent,
    TextareaEditButtonComponent,
    TextareaLikeDislikeButtonComponent,
    TextareaStartOverButtonComponent,
    TextareaToolbarComponent,
  ],
  exports: [
    TextareaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    StatisticsComponent,
    TranslocoRootModule,
  ]
})
export class TextareaModule {
}
