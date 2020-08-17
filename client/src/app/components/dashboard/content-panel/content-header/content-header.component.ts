import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from "@angular/core";
import { UserAuth } from "src/app/models/user.model";
import { Tag } from "src/app/models/stackExchange.model";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import * as AppActions from "src/app/state/app.actions";

@Component({
  selector: "content-header",
  templateUrl: "./content-header.component.html",
  styleUrls: ["./content-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentHeaderComponent implements OnInit {
  @Input() public userAuth?: UserAuth;
  @Input() public tag: Tag;
  @Input() public userFavoriteTags: Array<string>;
  @Input() public userSubscribedTags: Array<string>;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {}

  public get title(): string {
    return this.tag.name;
  }

  private isTagFavoriteByUser(tag: Tag): boolean {
    return (
      this.userFavoriteTags && this.userFavoriteTags.indexOf(tag.name) >= 0
    );
  }

  private isTagSubscribedByUser(tag: Tag): boolean {
    return (
      this.userSubscribedTags && this.userSubscribedTags.indexOf(tag.name) >= 0
    );
  }

  public getStarIconClass(): string {
    return this.isTagFavoriteByUser(this.tag) ? "is-solid" : "";
  }

  public getEmailIconClass(): string {
    return this.isTagSubscribedByUser(this.tag) ? "is-solid" : "";
  }

  public onStarClicked() {
    if (!this.hasUserLoggedIn) {
      this.router.navigate(["/user/login"]);
      return;
    }

    if (this.isTagFavoriteByUser(this.tag)) {
      this.store.dispatch(
        AppActions.removeFavoriteTagFromUser({ tag: this.tag.name })
      );
    } else {
      this.store.dispatch(
        AppActions.addFavoriteTagToUser({ tag: this.tag.name })
      );
    }
  }

  public onRefreshClicked() {
    this.store.dispatch(
      AppActions.fetchQuestions({ tag: this.tag, fetchRandom: true })
    );
  }

  private get hasUserLoggedIn(): boolean {
    return !!this.userAuth && !!this.userAuth.email;
  }
}
