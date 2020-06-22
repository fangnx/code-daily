import {
  Component,
  OnChanges,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { Tag } from "src/app/models/stackExchange.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import * as AppActions from "src/app/state/app.actions";

@Component({
  selector: "control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPanelComponent implements OnChanges {
  @Input() public tags: Array<Tag>;
  @Input() public selectedTag: Tag;
  @Input() public userFavoriteTags: Array<string>;
  @Output() public onTagSelected: EventEmitter<Tag> = new EventEmitter();

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private userService: UserService
  ) {}

  ngOnChanges() {}

  public getTreeNodeClass(tag: Tag): string {
    return this.isTagSelected(tag) ? "selected" : "";
  }

  public getTagClass(tag: Tag): string {
    return this.isTagSelected(tag) ? "active" : "";
  }

  public getStarIconClass(tag: Tag): string {
    return this.isTagFavoriteByUser(tag) ? "is-solid" : "";
  }

  private isTagSelected(tag: Tag): boolean {
    return this.selectedTag && this.selectedTag.name === tag.name;
  }

  private isTagFavoriteByUser(tag: Tag): boolean {
    return (
      this.userFavoriteTags && this.userFavoriteTags.indexOf(tag.name) >= 0
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
    // this.userService.addFavoriteTagToUser(tag.name);
    this.store.dispatch(AppActions.addFavoriteTagToUser({ tag: tag.name }));
  }
}
