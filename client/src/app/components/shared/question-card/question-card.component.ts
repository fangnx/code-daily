import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  Output,
  EventEmitter,
} from "@angular/core";
import { parseHtmlEntities } from "../../../helpers";
import { Question, Tag } from "src/app/app.model";

@Component({
  selector: "question-card",
  templateUrl: "./question-card.component.html",
  styleUrls: ["./question-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardComponent implements OnChanges {
  @Input() public question: Question;
  @Input() public selectedTagNames: Set<string> = new Set();
  @Output() public onTagSelected: EventEmitter<Tag> = new EventEmitter();

  public title: string;
  public tags: Tag[];

  constructor() {}

  ngOnChanges(): void {
    this.title = parseHtmlEntities(this.question["title"]);
    this.tags = this.question["tags"];
  }
}
