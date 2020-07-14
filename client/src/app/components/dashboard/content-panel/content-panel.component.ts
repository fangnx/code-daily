import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  selectQuestions,
  selectSelectedTag,
  selectUser,
} from "src/app/state/app.selectors";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import { Question, Tag } from "src/app/models/stackExchange.model";
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  bounceOnEnterAnimation,
} from "angular-animations";
import { ContentPanelService } from "src/app/services/contentPanel.service";
import { map } from "rxjs/operators";

@Component({
  selector: "content-panel",
  templateUrl: "./content-panel.component.html",
  styleUrls: ["./content-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    bounceOnEnterAnimation(),
  ],
})
export class ContentPanelComponent implements OnInit {
  // TODO: write service to inject params directly from Dashboard component.
  public questions$: Observable<Question[]>;
  public currentTag$: Observable<Tag>;
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

  ngOnInit() {
    this.questions$ = this.store.select((state) => selectQuestions(state));
    this.currentTag$ = this.store.select((state) => selectSelectedTag(state));

    this.userFavoriteTags$ = this.store
      .select((state) => selectUser(state))
      .pipe(
        map((user) => {
          console.log(user);
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
}
