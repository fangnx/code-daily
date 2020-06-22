import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { StackExchangeService } from "src/app/services/stackExchange.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import {
  selectSelectedTags,
  selectQuestions,
  selectUser,
  selectUserAuth,
} from "src/app/state/app.selectors";
import { Tag, Question } from "src/app/models/stackExchange.model";
import { UserAuth } from "src/app/models/user.model";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public questions$: Observable<Array<Question>>;
  public tags$: Observable<Array<Tag>>;
  public selectedTags$: Observable<Set<Tag>>;
  public user$: Observable<UserAuth>;
  public userFavoriteTags$: Observable<Array<string>>;

  constructor(
    private store: Store<AppState>,
    private stackExchangeService: StackExchangeService
  ) {}

  ngOnInit() {
    this.questions$ = this.store.select((state) => selectQuestions(state));

    this.tags$ = this.stackExchangeService
      .getPopularTags()
      .pipe(map((res) => res["items"]));

    this.selectedTags$ = this.store.select((state) =>
      selectSelectedTags(state)
    );

    this.user$ = this.store.select((state) => selectUserAuth(state));

    this.userFavoriteTags$ = this.store
      .select((state) => selectUser(state))
      .pipe(
        map((user) => {
          if (!user) {
            return [];
          }
          return user.favoriteTags;
        })
      );
  }

  public onTagSelected(tag: Tag): void {
    this.store.dispatch(AppActions.selectTag({ tag }));
  }

  public onTagUnselected(tag: Tag): void {
    this.store.dispatch(AppActions.unselectTag({ tag }));
  }
}
