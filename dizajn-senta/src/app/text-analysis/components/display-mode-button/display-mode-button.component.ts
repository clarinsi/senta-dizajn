import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FilterService} from "../../services/filter.service";
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-display-mode-button',
  templateUrl: './display-mode-button.component.html',
  styleUrls: ['./display-mode-button.component.scss']
})
export class DisplayModeButtonComponent {
  @Input() canChange = false;
  @Output() toggleDisplayMode = new EventEmitter<boolean>();

  inParallelMode: boolean = true;
  errorMessage: string | null = null;

  constructor(private filterService: FilterService, private translateService: TranslocoService) {
  }

  displayParallelMode(state: boolean) {
    if (!this.canChange && state === false) {
      this.errorMessage = this.translateService.translate('error.not_connected')
      setTimeout(() => this.errorMessage = null, 4000);
    } else {
      this.inParallelMode = state;
      this.toggleDisplayMode.emit(state);
      this.filterService.hide()
    }
  }
}
