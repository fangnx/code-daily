import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, pipe, EMPTY } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { QuestionsQuery, Question } from "../app.model";

@Injectable()
export class StackExchangeService {
  constructor(private httpClient: HttpClient) {}

  getQuestionsByIds(ids: string) {
    // return this.httpClient.get();
  }

  dummy() {
    return EMPTY;
  }

  getQuestionsByTags(query: QuestionsQuery): Observable<Question[]> {
    let params = new HttpParams();
    params = params.append("tags", query.tags);
    params = params.append("sort", query.sort);
    console.log(params);
    return this.httpClient
      .get<Question[]>("api/questions", {
        params,
      })
      .pipe(map((res) => res["items"]));
  }

  getPopularTags() {
    return this.httpClient.get<any[]>("api/tags", {
      params: {},
    });
  }
}
