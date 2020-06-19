import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.reducer";
import * as AppActions from "src/app/state/app.actions";

@Injectable()
export class UserService {
  constructor(private store: Store<AppState>, private httpClient: HttpClient) {}

  public getAllUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>("api/users");
  }

  public registerUser(user) {
    return this.httpClient
      .post("api/auth/register", user, { observe: "response" })
      .pipe(map((value) => value));
  }

  public loginUser(user) {
    return this.httpClient.post("api/auth/login", user).pipe(
      map((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        this.store.dispatch(AppActions.loginUser({ user }));
        return user;
      })
    );
  }

  public logoutUser(): void {
    localStorage.removeItem("user");
    this.store.dispatch(AppActions.logoutUser());
  }
}
