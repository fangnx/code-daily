import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Owner } from "src/app/app.model";

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

  ngOnInit() {
    this.ownerName = this.owner.display_name;
    this.ownerProfileImageUrl = this.owner.profile_image;
  }
}
