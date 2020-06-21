import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as AppActions from "./app.actions";
import { map, switchMap, withLatestFrom, concatMap, tap } from "rxjs/operators";
import { StackExchangeService } from "../services/stackExchange.service";
import { QuestionsQuery, QuestionsSortBy } from "../models/stackExchange.model";
import { GetUserQuery, User } from "../models/user.model";
import { StringifyTag } from "../helpers";
import { AppState } from "./app.reducer";
import { selectUser } from "./app.selectors";
import { UserService } from "../services/user.service";

@Injectable()
export class AppEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private stackExchangeApiService: StackExchangeService,
    private userService: UserService
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

      return this.stackExchangeApiService
        .getQuestionsByTags(query)
        .pipe(
          map((questions) => AppActions.fetchQuestionsSuccess({ questions }))
        );
    })
  );

  @Effect()
  fetchCurrentUser$ = this.actions$.pipe(
    ofType(AppActions.fetchCurrentUser),
    withLatestFrom(this.store.select((state) => selectUser(state))),
    switchMap(([_, userAuth]) => {
      const query: GetUserQuery = {
        email: userAuth.email,
      };

      return this.userService
        .getUser(query)
        .pipe(
          map((user: User) => AppActions.fetchCurrentUserSuccess({ user }))
        );
    })
  );

  @Effect()
  updateUser = this.actions$.pipe(
    ofType(
      AppActions.addFavoriteTagToUser,
      AppActions.removeFavoriteTagFromUser
    ),
    switchMap((action) => {
      return [AppActions.fetchCurrentUser()];
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
