import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, pipe, EMPTY } from "rxjs";
import { catchError, map, first } from "rxjs/operators";
import { QuestionsQuery, Question } from "../app.model";

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getAllUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>("api/users");
  }

  public registerUser(user) {
    console.log(user);
    this.httpClient
      .post("api/auth/register", user, { observe: "response" })
      .pipe(map((value) => console.log(value)))
      .subscribe();
  }
}
