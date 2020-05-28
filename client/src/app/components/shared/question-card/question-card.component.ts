import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  Output,
  EventEmitter,
} from "@angular/core";
import { parseHtmlEntities } from "../../../helpers";
import { Question, Tag, Answer } from "src/app/app.model";

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

  public isExpanded: boolean;

  public title: string;
  public viewCount: string;
  public upvoteCount: number;
  public downvoteCount: number;
  public creationDate: string;
  public lastEditDate: string;
  public tags: Array<Tag>;
  public answers: Array<Answer>;

  constructor() {}

  ngOnChanges(): void {
    this.isExpanded = false;
    this.title = parseHtmlEntities(this.question["title"]);
    this.viewCount = this.question["view_count"];
    this.upvoteCount = this.question["up_vote_count"];
    this.downvoteCount = this.question["down_vote_count"];
    this.tags = this.question["tags"];
    this.answers = this.question.answers
      ? this.question.answers.slice(0, 5)
      : [];
  }

  public onCardClicked(): void {
    this.isExpanded = !this.isExpanded;
  }
}
