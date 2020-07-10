import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import { selectUserAuth } from "../state/app.selectors";
import {
  User,
  CreateUserDto,
  LoginUserDto,
  UserAuth,
  GetUserQuery,
} from "../models/user.model";

@Injectable()
export class UserService {
  constructor(private store: Store<AppState>, private httpClient: HttpClient) {}

  public getUser(getUserQuery: GetUserQuery): Observable<User> {
    return this.httpClient.post<User>(
      "http://3.22.221.190/api/users/user",
      getUserQuery
    );
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://3.22.221.190/api/users");
  }

  public registerUser(createUserDto: CreateUserDto) {
    return this.httpClient
      .post("http://3.22.221.190/api/auth/register", createUserDto, {
        observe: "response",
      })
      .pipe(map((value) => value));
  }

  public loginUser(loginUserDto: LoginUserDto): Observable<UserAuth> {
    return this.httpClient
      .post<UserAuth>("http://3.22.221.190/api/auth/login", loginUserDto)
      .pipe(
        map((userAuth) => {
          localStorage.setItem("user", JSON.stringify(userAuth));
          this.store.dispatch(AppActions.loginUser({ userAuth }));
          return userAuth;
        })
      );
  }

  public logoutUser(): void {
    localStorage.removeItem("user");
    this.store.dispatch(AppActions.logoutUser());
  }

  public addFavoriteTagToUser(tag: string, email: string) {
    const addFavoriteTagDto = { email, tag };
    return this.httpClient.post<void>(
      "http://3.22.221.190/api/users/tags/add",
      addFavoriteTagDto
    );
  }

  public removeFavoriteTagFromUser(tag: string, email: string) {
    const removeFavoriteTagDto = { email, tag };
    return this.httpClient.post<void>(
      "http://3.22.221.190/api/users/tags/remove",
      removeFavoriteTagDto
    );
  }
}
