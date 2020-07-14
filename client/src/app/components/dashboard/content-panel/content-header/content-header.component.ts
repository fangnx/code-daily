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

@Component({
  selector: "content-header",
  templateUrl: "./content-header.component.html",
  styleUrls: ["./content-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentHeaderComponent implements OnInit {
  @Input() public user?: UserAuth;
  @Input() public tag: Tag;
  @Input() public userFavoriteTags: Array<string>;
  @Input() public userSubscribedTags: Array<string>;

  constructor() {}

  ngOnInit() {
    console.log(this.userFavoriteTags);
  }

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

  public onStarClicked() {}

  public onEmailClicked() {}
}
