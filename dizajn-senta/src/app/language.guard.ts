import {CanActivateFn} from '@angular/router';
import {TranslocoService} from "@ngneat/transloco";
import {inject} from "@angular/core";


export const languageGuard: CanActivateFn = (route, state) => {
  const translocoService = inject(TranslocoService);
  const lang = route.url[0]?.path ?? translocoService.getDefaultLang();
  if (lang) {
    translocoService.setActiveLang(lang);
  }
  return false;
};
