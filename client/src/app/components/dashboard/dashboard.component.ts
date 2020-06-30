import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { StackExchangeService } from "src/app/services/stackExchange.service";
import { Observable, BehaviorSubject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import {
  selectSelectedTag,
  selectQuestions,
  selectUser,
  selectUserAuth,
} from "src/app/state/app.selectors";
import { Tag, Question } from "src/app/models/stackExchange.model";
import { UserAuth } from "src/app/models/user.model";
import { ContentPanelService } from "src/app/services/contentPanel.service";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public questions$: Observable<Array<Question>>;
  public tags$: Observable<Array<Tag>>;
  public selectedTag$: Observable<Tag>;
  public user$: Observable<UserAuth>;
  public userFavoriteTags$: Observable<Array<string>>;
  public isContentPanelReady$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  constructor(
    private store: Store<AppState>,
    private stackExchangeService: StackExchangeService,
    private contentPanelService: ContentPanelService
  ) {}

  ngOnInit() {
    this.questions$ = this.store.select((state) => selectQuestions(state));

    this.tags$ = this.stackExchangeService
      .getPopularTags()
      .pipe(map((res) => res["items"]));

    this.store
      .select((state) => selectSelectedTag(state))
      .pipe(
        tap(() => {
          this.contentPanelService.setReadyState(true);
        })
      )
      .subscribe();

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
    this.contentPanelService.setReadyState(false);
    this.store.dispatch(AppActions.selectTag({ tag }));
  }

  public onTagUnselected(tag: Tag): void {
    this.store.dispatch(AppActions.unselectTag({ tag }));
  }
}
