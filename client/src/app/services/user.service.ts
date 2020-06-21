import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import { selectUser } from "../state/app.selectors";

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

  public async addFavoriteTagToUser(tag: string) {
    // const user = await this.store
    //   .select((state) => selectUser(state))
    //   .toPromise();

    // console.log(user);

    // const addFavoriteTagDto = { email: user.email, tag };

    // this.httpClient.post<void>("api/users/tags/add", addFavoriteTagDto).pipe();

    this.store
      .select((state) => selectUser(state))
      .pipe(
        tap((next) => {
          console.log(next);
          const addFavoriteTagDto = { email: next.email, tag };
          this.httpClient
            .post<void>("api/users/tags/add", addFavoriteTagDto)
            .subscribe();
        })
      )
      .subscribe();
  }

  public removeFavoriteTagFromUser(tag: string) {}
}
