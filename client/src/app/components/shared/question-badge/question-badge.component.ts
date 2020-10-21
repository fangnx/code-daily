import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Owner } from "src/app/models/stackExchange.model";
import {
  faEye,
  faCommentDots,
  faPenSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStackOverflow,
  faGetPocket,
} from "@fortawesome/free-brands-svg-icons";
import { parseHtmlEntities } from "../../../utils/helpers";

@Component({
  selector: "question-badge",
  templateUrl: "./question-badge.component.html",
  styleUrls: ["./question-badge.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionBadgeComponent implements OnInit {
  @Input() owner: Owner;
  @Input() creationDate: number;
  @Input() viewCount: number;
  @Input() answerCount: number;

  public ownerName: string;
  public ownerProfileImageUrl: string;

  public faEye = faEye;
  public faCommentDots = faCommentDots;
  public faPenSquare = faPenSquare;
  public faStackOverflow = faStackOverflow;
  public faGetPocket = faGetPocket;

  ngOnInit() {
    this.ownerName = parseHtmlEntities(this.owner.display_name);
    this.ownerProfileImageUrl = this.owner.profile_image;
  }

  public get profileImageUrl() {
    return !this.ownerProfileImageUrl
      ? "../../../../assets/default-user.png"
      : this.ownerProfileImageUrl;
  }
}
