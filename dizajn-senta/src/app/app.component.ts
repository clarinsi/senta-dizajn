import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Senta';
  currentLang: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private translocoService: TranslocoService) {
    translocoService.langChanges$.subscribe(lang => this.currentLang = lang);

    // override the route reuse strategy
    router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }
}
