import {
  Component,
  OnChanges,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnInit,
} from "@angular/core";
import { Tag } from "src/app/app.model";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPanelComponent implements OnInit, OnChanges {
  @Input() public tags: Array<Tag>;
  @Input() public selectedTag: Tag;
  @Output() public onTagSelected: EventEmitter<Tag> = new EventEmitter();

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.tags && this.tags.length > 0 && !this.selectedTag) {
      // this.onSelectTag(this.tags[0]);
    }
  }

  public isTagSelected(tag: Tag): boolean {
    return this.selectedTag === tag;
  }

  public onStarClicked(tag: Tag): void {
    this.userService.addFavoriteTagToUser(tag.name);
  }

  public getStarIconClass(tag): string {
    return "";
  }

  public getTreeNodeClass(tag: Tag): string {
    return this.isTagSelected(tag) ? "selected" : "";
  }

  public getTagClass(tag: Tag): string {
    return this.isTagSelected(tag) ? "active" : "";
  }

  public onSelectTag(tag: Tag): void {
    // TODO: find a better way to redirect.
    this.router.navigate(["/dashboard"]);
    if (this.selectedTag != tag) {
      this.selectedTag = tag;
      this.onTagSelected.emit(tag);
    }
  }
}
