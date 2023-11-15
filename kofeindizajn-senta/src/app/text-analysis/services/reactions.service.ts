import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {ReactionType} from "../enums/reaction-type.enum";

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {

  constructor() {
  }

  async like(text: string) {
    await this.send(ReactionType.Like, text);
  }

  async dislike(text: string) {
    await this.send(ReactionType.Dislike, text);
  }

  private async send(reaction: ReactionType, text: string): Promise<void> {
    try {
      const url = `${environment.apiUrl}${environment.reactionsEndpoint}`

      await fetch(url, {
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          text: text,
          value: reaction,
        }),
      })
    } catch (e) {
      throw e;
    }
  }
}
