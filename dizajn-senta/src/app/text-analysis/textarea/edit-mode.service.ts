import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditModeService {

  idOfElementInEditing: string | null;

  constructor() {
    this.idOfElementInEditing = null;
  }

  activate(elementId: string) {
    this.idOfElementInEditing = elementId;
  }

  deactivate() {
    this.idOfElementInEditing = null;
  }
}
