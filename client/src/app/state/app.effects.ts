import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY } from "rxjs";
import * as AppActions from "./app.actions";
import { filter, map, switchMap, withLatestFrom } from "rxjs/operators";
import { StackExchangeService } from "../services/stackExchange.service";
import { PocketService } from "../services/pocket.service";
import { QuestionsQuery, QuestionsSortBy } from "../models/stackExchange.model";
import { GetUserQuery, User, UserAuth } from "../models/user.model";
import { AppState } from "./app.reducer";
import { selectSelectedTag, selectUserAuth } from "./app.selectors";
import { UserService } from "../services/user.service";
import { ActivationEnd, Router } from "@angular/router";
import { PocketOperationType } from "../models/pocket.model";
import { normalizePageNumber } from "../utils/helpers";

@Injectable()
export class AppEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private stackExchangeApiService: StackExchangeService,
    private pocketApiService: PocketService,
    private userService: UserService,
    private router: Router
  ) {
    this.listenToRouter();
  }

  // Set up a subscription to listen to router change.
  // Note: service in Angular is a singleton -> no need to unsubscribe and worry about memory leaks.
  private listenToRouter() {
    this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .subscribe((event: ActivationEnd) => {
        if (event.snapshot.params.tag) {
          let page: number = 1;
          if (event.snapshot.params.page) {
            page = normalizePageNumber(+event.snapshot.params.page, 8);
          }

          this.store.dispatch(
            AppActions.selectTag({
              tag: event.snapshot.params.tag,
              page,
            })
          );
        }
      });
  }

  // @Effect()
  // scrollToTop$ = this.actions$.pipe(
  //   ofType(AppActions.fetchQuestions),
  //   switchMap(() => {
  //     console.log("scroll");
  //     document.querySelector("content-panel main").scrollTo(0, 0);
  //     return EMPTY;
  //   })
  // );

  @Effect()
  fetchQuestions$ = this.actions$.pipe(
    ofType(AppActions.fetchQuestions),
    switchMap((action) => {
      const page = action.page || 1;

      const query: QuestionsQuery = {
        page,
        tags: action.tag,
        sort: QuestionsSortBy.Votes,
        pagesize: 10,
      };

      if (action.fetchRandom) {
        return this.stackExchangeApiService
          .getRandomQuestionsByTags(query)
          .pipe(
            map((questions) =>
              AppActions.fetchQuestionsSuccess({ questions, page })
            )
          );
      }

      return this.stackExchangeApiService
        .getQuestionsByTags(query)
        .pipe(
          map((questions) =>
            AppActions.fetchQuestionsSuccess({ questions, page })
          )
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
  fetchCurrentUser$ = this.actions$.pipe(
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
  updateCurrentUserAuth$ = this.actions$.pipe(
    ofType(AppActions.updateCurrentUserAuth),
    withLatestFrom(this.store.select((state) => selectUserAuth(state))),
    switchMap(([_, userAuth]) => {
      if (!userAuth || !userAuth.email) {
        return EMPTY;
      }

      const query: GetUserQuery = {
        email: userAuth.email,
      };

      return this.userService.getUserAuth(query).pipe(
        map((userAuth: UserAuth) => {
          return AppActions.updateCurrentUserAuthSuccess({ userAuth });
        })
      );
    })
  );

  // Fetch questions when a new tag is selected.
  @Effect()
  updateQuestionsOnNewTag$ = this.actions$.pipe(
    ofType(AppActions.selectTag),
    switchMap((action) => {
      return [
        AppActions.fetchQuestions({ tag: action.tag, page: +action.page }),
      ];
    })
  );

  // Fetch questions when a new page is set.
  @Effect()
  updateQuestionsOnNewPage$ = this.actions$.pipe(
    ofType(AppActions.setPage),
    withLatestFrom(this.store.select((state) => selectSelectedTag(state))),
    switchMap(([action, tag]) => {
      this.router.navigate(["dashboard", tag, { page: action.page }]);
      return [AppActions.fetchQuestions({ tag, page: action.page })];
    })
  );

  @Effect()
  authorizePocketWithBackend$ = this.actions$.pipe(
    ofType(AppActions.authorizePocket),
    switchMap((action) => {
      return this.pocketApiService
        .authorize(action.email, action.requestToken)
        .pipe(
          map(() => {
            this.router.navigate(["/dashboard"]);
            return AppActions.updateCurrentUserAuth();
          })
        );
    })
  );

  @Effect()
  requestAddItemToPocket = this.actions$.pipe(
    ofType(AppActions.addItemToPocket),
    withLatestFrom(this.store.select((state) => selectUserAuth(state))),
    switchMap(([action, userAuth]) => {
      return this.pocketApiService
        .addItemToPocket(
          userAuth.pocketAccessToken,
          action.url,
          action.title,
          action.tags
        )
        .pipe(
          map((success) =>
            AppActions.notifyPocketOperation({
              success,
              operationType: PocketOperationType.addItem,
            })
          )
        );
    })
  );

  @Effect()
  notifyPocketOperation = this.actions$.pipe(
    ofType(AppActions.notifyPocketOperation),
    switchMap(() => {
      return EMPTY;
    })
  );

  @Effect()
  routeToDashboard$ = this.actions$.pipe(
    ofType(AppActions.navigateToDashboard),
    switchMap(() => {
      this.router.navigate(["/dashboard"]);
      return EMPTY;
    })
  );
}
