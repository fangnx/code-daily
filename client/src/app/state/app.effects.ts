import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, Effect } from "@ngrx/effects";
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
import { EMPTY } from "rxjs/internal/observable/empty";
import { AppState } from "./app.reducer";
import { selectSelectedTags } from "./app.selectors";
import { QuestionsQuery } from "../app.model";

@Injectable()
export class AppEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private stackExchangeApiService: StackExchangeService
  ) {}

  // fetchQuestions$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(AppActions.fetchQuestions),
  //     switchMap(() => {
  //       return this.stackExchangeApiService.getPopularTags().pipe(
  //         map((res) => res),
  //         catchError(() => EMPTY)
  //       );
  //     })
  //   );
  // });

  @Effect()
  fetchQuestions$ = this.actions$.pipe(
    ofType(AppActions.fetchQuestions),
    withLatestFrom(this.store.select((state) => selectSelectedTags(state))),
    map(([action, selectedTags]) => {
      const query: QuestionsQuery = {
        tags: '["javascript"]',
      };
      return this.stackExchangeApiService.getQuestionsByTags(query);
    })
  );

  @Effect()
  UpdateTags$ = this.actions$.pipe(
    ofType(AppActions.unselectTag),
    mapTo(AppActions.fetchQuestions())
  );
}
