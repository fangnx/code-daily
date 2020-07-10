import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, pipe, EMPTY } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { QuestionsQuery, Question, Tag } from "../models/stackExchange.model";

@Injectable()
export class StackExchangeService {
  constructor(private httpClient: HttpClient) {}

  public getQuestionsByTags(query: QuestionsQuery): Observable<Question[]> {
    let params = new HttpParams();
    params = params.append("tags", query.tags);
    params = params.append("sort", query.sort);
    params = params.append("pagesize", query.pagesize.toString());
    return this.httpClient
      .get<Question[]>("http://172.31.18.89:8200/questions", {
        params,
      })
      .pipe(map((res) => res["items"]));
  }

  public getPopularTags() {
    return this.httpClient.get<Tag[]>("http://172.31.18.89:8200/tags", {
      params: {},
    });
  }
}
