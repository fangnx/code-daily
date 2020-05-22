import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, pipe } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class StackExchangeService {
  constructor(private httpClient: HttpClient) {}

  getQuestionsByIds(ids: string) {
    // return this.httpClient.get();
  }

  getQuestionsByTags(tags: string[]) {
    const params = new HttpParams().set("tags", '["python"]');
    return this.httpClient.get<any[]>("api/questions", {
      params,
    });
  }

  getPopularTags() {
    return this.httpClient.get<any[]>("api/tags", {
      params: {},
    });
  }
}
