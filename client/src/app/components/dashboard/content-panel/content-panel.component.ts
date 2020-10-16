import { Component, ChangeDetectionStrategy, OnInit, OnChanges } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  selectQuestions,
  selectSelectedTag,
  selectUser,
  selectUserAuth,
} from "src/app/state/app.selectors";
import { Store } from "@ngrx/store";
import * as AppActions from "src/app/state/app.actions";
import { AppState } from "src/app/state/app.reducer";
import { Question } from "src/app/models/stackExchange.model";
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  bounceOnEnterAnimation,
} from "angular-animations";
import { ContentPanelService } from "src/app/services/contentPanel.service";
import { UserAuth } from "src/app/models/user.model";

@Component({
  selector: "content-panel",
  templateUrl: "./content-panel.component.html",
  styleUrls: ["./content-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ delay: 25 }),
    bounceOnEnterAnimation(),
  ],
})
export class ContentPanelComponent implements OnInit {
  // TODO: write service to inject params directly from Dashboard component.
  public userAuth$: Observable<UserAuth>;
  public questions$: Observable<Question[]>;
  public currentTag$: Observable<string>;
  public userFavoriteTags$: Observable<Array<string>>;
  public userSubscribedTags$: Observable<Array<string>>;
  public ready: boolean = false;

  constructor(
    private store: Store<AppState>,
    private contentPanelService: ContentPanelService
  ) {
    this.contentPanelService.isContentPanelReady$.subscribe((value) => {
      this.ready = value;
    });
  }

  ngOnInit(): void {    
    this.userAuth$ = this.store.select((state) => selectUserAuth(state));
    this.questions$ = this.store.select((state) => selectQuestions(state));
    this.currentTag$ = this.store.select((state) => selectSelectedTag(state));

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

    this.userSubscribedTags$ = this.store
      .select((state) => selectUser(state))
      .pipe(
        map((user) => {
          if (!user) {
            return [];
          }
          return user.subscribedTags;
        })
      );
  }

  public onAddToPocket(event) {
    this.store.dispatch(
      AppActions.addItemToPocket({
        url: event.url,
        title: event.title,
        tags: event.tags,
      })
    );
  }
}
