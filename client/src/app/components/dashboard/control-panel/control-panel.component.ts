import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { Tag } from "src/app/models/stackExchange.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import { UserAuth } from "src/app/models/user.model";
import { importExpr } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPanelComponent {
  @Input() public user?: UserAuth;
  @Input() public tags: Array<Tag>;
  @Input() public selectedTag: Tag;
  @Input() public userFavoriteTags: Array<string>;
  @Input() public userSubscribedTags: Array<string>;
  @Output() public onTagSelected: EventEmitter<Tag> = new EventEmitter();

  // TODO: refactor this.
  public favoriteTags: Array<Tag>;

  constructor(private router: Router, private store: Store<AppState>) {}

  public getTreeNodeClass(tag: Tag): string {
    return this.isTagSelected(tag) ? "selected" : "";
  }

  public getTagClass(tag: Tag): string {
    return this.isTagSelected(tag) ? "active" : "";
  }

  public getStarIconClass(tag: Tag): string {
    return this.isTagFavoriteByUser(tag) ? "is-solid" : "";
  }

  public getEmailIconClass(tag: Tag): string {
    return this.isTagSubscribedByUser(tag) ? "is-solid" : "";
  }

  private isTagSelected(tag: Tag): boolean {
    return this.selectedTag && this.selectedTag.name === tag.name;
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

  public onSelectTag(tag: Tag): void {
    // TODO: find a better way to redirect.
    this.router.navigate(["/dashboard"]);
    if (this.selectedTag != tag) {
      this.selectedTag = tag;
      this.onTagSelected.emit(tag);
    }
  }

  public onStarClicked(tag: Tag): void {
    if (!this.hasUserLoggedIn) {
      this.router.navigate(["/user/login"]);
      return;
    }

    if (this.isTagFavoriteByUser(tag)) {
      this.store.dispatch(
        AppActions.removeFavoriteTagFromUser({ tag: tag.name })
      );
    } else {
      this.store.dispatch(AppActions.addFavoriteTagToUser({ tag: tag.name }));
    }
  }

  public onEmailClicked(tag: Tag): void {
    if (!this.hasUserLoggedIn) {
      this.router.navigate(["/user/login"]);
      return;
    }

    if (this.isTagSubscribedByUser(tag)) {
      this.store.dispatch(AppActions.unsubscribeToTag({ tag: tag.name }));
    } else {
      this.store.dispatch(AppActions.subscribeToTag({ tag: tag.name }));
    }
  }

  private get hasUserLoggedIn(): boolean {
    return !!this.user && !!this.user.email;
  }
}
