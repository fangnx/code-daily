import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import { UserAuth } from "src/app/models/user.model";

@Component({
  selector: "control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPanelComponent {
  @Input() public user?: UserAuth;
  @Input() public tags: Array<string>;
  @Input() public selectedTag: string;
  @Input() public userFavoriteTags: Array<string>;
  @Input() public userSubscribedTags: Array<string>;
  @Output() public onTagSelected: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router, private store: Store<AppState>) {}

  public getTreeNodeClass(tag: string): string {
    return this.isTagSelected(tag) ? "selected" : "";
  }

  public getTagClass(tag: string): string {
    return this.isTagSelected(tag) ? "active" : "";
  }

  public getStarIconClass(tag: string): string {
    return this.isTagFavoriteByUser(tag) ? "is-solid" : "";
  }

  public getEmailIconClass(tag: string): string {
    return this.isTagSubscribedByUser(tag) ? "is-solid" : "";
  }

  private isTagSelected(tag: string): boolean {
    return this.selectedTag === tag;
  }

  private isTagFavoriteByUser(tag: string): boolean {
    return this.userFavoriteTags && this.userFavoriteTags.indexOf(tag) >= 0;
  }

  private isTagSubscribedByUser(tag: string): boolean {
    return this.userSubscribedTags && this.userSubscribedTags.indexOf(tag) >= 0;
  }

  public onSelectTag(tag: string): void {
    // TODO: find a better way to redirect.
    this.router.navigate(["/dashboard", tag]);
    if (this.selectedTag != tag) {
      this.selectedTag = tag;
      this.onTagSelected.emit(tag);
    }
  }

  public onStarClicked(tag: string): void {
    if (!this.hasUserLoggedIn) {
      this.router.navigate(["/user/login"]);
      return;
    }

    if (this.isTagFavoriteByUser(tag)) {
      this.store.dispatch(AppActions.removeFavoriteTagFromUser({ tag }));
    } else {
      this.store.dispatch(AppActions.addFavoriteTagToUser({ tag }));
    }
  }

  public onEmailClicked(tag: string): void {
    if (!this.hasUserLoggedIn) {
      this.router.navigate(["/user/login"]);
      return;
    }

    if (this.isTagSubscribedByUser(tag)) {
      this.store.dispatch(AppActions.unsubscribeToTag({ tag: tag }));
    } else {
      this.store.dispatch(AppActions.subscribeToTag({ tag: tag }));
    }
  }

  private get hasUserLoggedIn(): boolean {
    return !!this.user && !!this.user.email;
  }
}
