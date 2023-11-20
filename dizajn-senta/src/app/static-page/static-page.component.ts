import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss'],
})
export class StaticPageComponent {
  markdownContent: string = "";

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private translateService: TranslocoService) {
  }

  ngOnInit() {
    const filename = this.route.snapshot.paramMap.get('filename');
    const lang = this.translateService.getActiveLang()

    if (filename) {
      const markdownFileURL = `assets/pages/${lang}/${filename}.md`;

      this.httpClient.get(markdownFileURL, {responseType: 'text'}).subscribe((content) => {
        this.markdownContent = content
      });
    }
  }
}
