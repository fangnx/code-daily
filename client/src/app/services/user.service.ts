import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import { selectUser } from "../state/app.selectors";
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
    return this.httpClient.post<User>("api/user", getUserQuery);
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("api/users");
  }

  public registerUser(createUserDto: CreateUserDto) {
    return this.httpClient
      .post("api/auth/register", createUserDto, { observe: "response" })
      .pipe(map((value) => value));
  }

  public loginUser(loginUserDto: LoginUserDto): Observable<UserAuth> {
    return this.httpClient.post<UserAuth>("api/auth/login", loginUserDto).pipe(
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