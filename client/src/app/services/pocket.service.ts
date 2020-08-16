import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { QuestionsQuery, Question, Tag } from "../models/stackExchange.model";
import { PocketRequestToken, PocketAccessToken } from "../models/pocket.model";

@Injectable()
export class PocketService {
  constructor(private httpClient: HttpClient) {}

  public getQuestionsByTags(query: QuestionsQuery): Observable<Question[]> {
    let params = new HttpParams();
    params = params.append("tags", query.tags);
    params = params.append("sort", query.sort);
    params = params.append("pagesize", query.pagesize.toString());
    return this.httpClient
      .get<Question[]>("/api/questions", {
        params,
      })
      .pipe(map((res) => res["items"]));
  }

  public getPopularTags() {
    return this.httpClient.get<Tag[]>("/api/tags", {
      params: {},
    });
  }

  public getRequestToken(): Promise<PocketRequestToken> {
    return this.httpClient
      .get<PocketRequestToken>("api/pocket/request_token")
      .toPromise();
  }

  public authorize(requestToken: string): Promise<PocketAccessToken> {
    let params = new HttpParams();
    params = params.append("request_token", requestToken);

    return this.httpClient
      .get<PocketAccessToken>("api/pocket/authorize", { params })
      .toPromise();
  }
}
