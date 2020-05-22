import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
} from "@angular/core";
import { parseHtmlEntities } from "../../../helpers";

@Component({
  selector: "question-card",
  templateUrl: "./question-card.component.html",
  styleUrls: ["./question-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardComponent implements OnChanges {
  @Input() question;

  public title: string;
  public tags: string[];

  constructor() {}

  ngOnChanges(): void {
    this.title = parseHtmlEntities(this.question["title"]);
    this.tags = this.question["tags"];
  }

  public onSelectTag(tag: string) {}
}
