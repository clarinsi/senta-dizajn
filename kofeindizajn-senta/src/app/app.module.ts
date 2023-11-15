import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DirectivesModule} from "./directives/directives.module";
import {TextAnalysisModule} from "./text-analysis/text-analysis.module";
import {NgOptimizedImage} from "@angular/common";
import {StaticPageComponent} from './static-page/static-page.component';
import {MarkedPipe} from './marked.pipe';
import {HttpClientModule} from "@angular/common/http";
import {TranslocoRootModule} from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    StaticPageComponent,
    MarkedPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    TextAnalysisModule,
    NgOptimizedImage,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
