import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TextAnalysisComponent} from "./text-analysis/text-analysis.component";
import {StaticPageComponent} from "./static-page/static-page.component";
import {languageGuard} from "./language.guard";

const routes: Routes = [
  {
    path: '',
    component: TextAnalysisComponent,
    resolve: [languageGuard],
  },
  {
    path: 'en',
    resolve: [languageGuard],
    children: [
      {
        path: '',
        component: TextAnalysisComponent,
      },
      {
        path: ':filename',
        component: StaticPageComponent,
      },
    ],
  },
  {
    path: ':filename',
    component: StaticPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
