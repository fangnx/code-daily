import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  Output,
  EventEmitter,
  OnInit,
} from "@angular/core";
import { parseHtmlEntities, parseUnixTimestamp } from "../../../helpers";
import { Question, Tag, Answer, Owner } from "src/app/app.model";

@Component({
  selector: "question-card",
  templateUrl: "./question-card.component.html",
  styleUrls: ["./question-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardComponent implements OnInit {
  @Input() public question: Question;
  @Input() public selectedTagNames: Set<string> = new Set();
  @Output() public onTagSelected: EventEmitter<Tag> = new EventEmitter();

  public isExpanded: boolean;

  public title: string;
  public owner: Owner;
  public viewCount: number;
  public answerCount: number;
  public upvoteCount: number;
  public downvoteCount: number;
  public creationDate: string;
  public lastEditDate: string;
  public tags: Array<Tag>;
  public answers: Array<Answer>;

  ngOnInit(): void {
    this.isExpanded = false;
    this.title = parseHtmlEntities(this.question.title);
    this.owner = this.question.owner;
    this.viewCount = this.question.view_count;
    this.answerCount = this.question.answer_count;
    this.upvoteCount = this.question.up_vote_count;
    this.downvoteCount = this.question.down_vote_count;

    this.creationDate = parseUnixTimestamp(this.question.creation_date);
    this.lastEditDate = parseUnixTimestamp(this.question.last_edit_date);

    this.tags = this.question["tags"];
    this.answers = this.question.answers
      ? this.question.answers.slice(0, 5)
      : [];
  }

  public onCardClicked(): void {
    this.isExpanded = !this.isExpanded;
  }
}
