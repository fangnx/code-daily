import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as AppActions from "./app.actions";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import { StackExchangeService } from "../services/stackExchange.service";
import { QuestionsQuery, QuestionsSortBy } from "../models/stackExchange.model";
import { GetUserQuery, User } from "../models/user.model";
import { StringifyTag } from "../helpers";
import { AppState } from "./app.reducer";
import { selectUserAuth } from "./app.selectors";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { EMPTY } from "rxjs";

@Injectable()
export class AppEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private stackExchangeApiService: StackExchangeService,
    private userService: UserService,
    private router: Router
  ) {}

  @Effect()
  fetchQuestions$ = this.actions$.pipe(
    ofType(AppActions.fetchQuestions),
    switchMap((action) => {
      const query: QuestionsQuery = {
        tags: StringifyTag(action.tag),
        sort: QuestionsSortBy.Votes,
        pagesize: 10,
      };

      if (action.fetchRandom) {
        return this.stackExchangeApiService
          .getRandomQuestionsByTags(query)
          .pipe(
            map((questions) => AppActions.fetchQuestionsSuccess({ questions }))
          );
      }

      return this.stackExchangeApiService
        .getQuestionsByTags(query)
        .pipe(
          map((questions) => AppActions.fetchQuestionsSuccess({ questions }))
        );
    })
  );

  @Effect()
  AddFavoriteTagToUser = this.actions$.pipe(
    ofType(AppActions.addFavoriteTagToUser),
    withLatestFrom(this.store.select((state) => selectUserAuth(state))),
    switchMap(([action, userAuth]) => {
      const tag: string = action.tag;
      const email: string = userAuth.email;
      return this.userService
        .addFavoriteTagToUser(tag, email)
        .pipe(map(() => AppActions.fetchCurrentUser()));
    })
  );

  @Effect()
  RemoveFavoriteTagFromUser = this.actions$.pipe(
    ofType(AppActions.removeFavoriteTagFromUser),
    withLatestFrom(this.store.select((state) => selectUserAuth(state))),
    switchMap(([action, userAuth]) => {
      const tag: string = action.tag;
      const email: string = userAuth.email;
      return this.userService
        .removeFavoriteTagFromUser(tag, email)
        .pipe(map(() => AppActions.fetchCurrentUser()));
    })
  );

  @Effect()
  SubscribeToTag = this.actions$.pipe(
    ofType(AppActions.subscribeToTag),
    withLatestFrom(this.store.select((state) => selectUserAuth(state))),
    switchMap(([action, userAuth]) => {
      const tag: string = action.tag;
      const email: string = userAuth.email;
      return this.userService
        .subscribeToTag(tag, email)
        .pipe(map(() => AppActions.fetchCurrentUser()));
    })
  );

  @Effect()
  UnsubscribeToTag = this.actions$.pipe(
    ofType(AppActions.unsubscribeToTag),
    withLatestFrom(this.store.select((state) => selectUserAuth(state))),
    switchMap(([action, userAuth]) => {
      const tag: string = action.tag;
      const email: string = userAuth.email;
      return this.userService
        .unsubscribeToTag(tag, email)
        .pipe(map(() => AppActions.fetchCurrentUser()));
    })
  );

  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType(AppActions.loginUser),
    switchMap(() => {
      this.router.navigate(["/dashboard"]);
      return [AppActions.fetchCurrentUser()];
    })
  );

  @Effect()
  logoutUser$ = this.actions$.pipe(
    ofType(AppActions.logoutUser),
    switchMap(() => {
      this.router.navigate(["/dashboard"]);
      return EMPTY;
    })
  );

  @Effect()
  fetchCurrentUserAuth$ = this.actions$.pipe(
    ofType(AppActions.fetchCurrentUser),
    withLatestFrom(this.store.select((state) => selectUserAuth(state))),
    switchMap(([_, userAuth]) => {
      if (!userAuth || !userAuth.email) {
        return EMPTY;
      }

      const query: GetUserQuery = {
        email: userAuth.email,
      };

      return this.userService.getUser(query).pipe(
        map((user: User) => {
          return AppActions.fetchCurrentUserSuccess({ user });
        })
      );
    })
  );

  @Effect()
  updateQuestions$ = this.actions$.pipe(
    ofType(AppActions.selectTag),
    switchMap((action) => {
      return [AppActions.fetchQuestions({ tag: action.tag })];
    })
  );
}
