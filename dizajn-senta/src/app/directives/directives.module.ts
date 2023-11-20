import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TippyDirective} from "./tippy.directive";

@NgModule({
  declarations: [
    TippyDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TippyDirective,
  ],
})
export class DirectivesModule {
}
