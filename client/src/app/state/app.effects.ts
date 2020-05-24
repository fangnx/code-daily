import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as AppActions from "./app.actions";
import {
  catchError,
  map,
  switchMap,
  mapTo,
  withLatestFrom,
} from "rxjs/operators";
import { StackExchangeService } from "../services/stackExchange.service";
import { AppState } from "./app.reducer";
import { QuestionsQuery } from "../app.model";
import { StringifyTag } from "../helpers";

@Injectable()
export class AppEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private stackExchangeApiService: StackExchangeService
  ) {}

  @Effect()
  fetchQuestions$ = this.actions$.pipe(
    ofType(AppActions.fetchQuestions),
    switchMap((action) => {
      const query: QuestionsQuery = {
        tags: StringifyTag(action.tag),
      };

      return this.stackExchangeApiService
        .getQuestionsByTags(query)
        .pipe(
          map((questions) => AppActions.fetchQuestionsSuccess({ questions }))
        );
    })
  );

  @Effect()
  addTag$ = this.actions$.pipe(
    ofType(AppActions.selectTag),
    switchMap((action) => {
      return [AppActions.fetchQuestions({ tag: action.tag })];
    })
  );

  // @Effect()
  // removeTag$ = this.actions$.pipe(
  //   ofType(AppActions.unselectTag),
  //   switchMap((action) => {
  //     return [AppActions.fetchQuestions({ tag: action.tag })];
  //   })
  // );
}
