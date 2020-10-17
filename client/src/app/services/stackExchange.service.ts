import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { QuestionsQuery, Question, Tag } from "../models/stackExchange.model";

@Injectable()
export class StackExchangeService {
  constructor(private httpClient: HttpClient) {}

  public getQuestionsByTags(query: QuestionsQuery): Observable<Question[]> {
    let params = new HttpParams();
    params = params.append("tags", query.tags);
    params = params.append("sort", query.sort);
    params = params.append("pagesize", query.pagesize.toString());
    params = params.append("page", query.page.toString());
    return this.httpClient
      .get<Question[]>("/api/questions", {
        params,
      })
      .pipe(map((res) => res["items"]));
  }

  public getRandomQuestionsByTags(
    query: QuestionsQuery
  ): Observable<Question[]> {
    let params = new HttpParams();
    params = params.append("tags", query.tags);
    params = params.append("sort", query.sort);
    params = params.append("pagesize", query.pagesize.toString());
    params = params.append("page", query.page.toString());
    return this.httpClient
      .get<Question[]>("/api/questions/random", {
        params,
      })
      .pipe(map((res) => res["items"]));
  }

  public getDefaultTags(): Observable<string[]> {
    return this.httpClient.get<string[]>("/api/tags");
  }

  public getPopularTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>("/api/tags/popular", {
      params: {},
    });
  }
}
