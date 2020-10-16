import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnInit,
} from "@angular/core";
import { parseHtmlEntities, parseUnixTimestamp } from "../../../helpers";
import {
  Question,
  Tag,
  Owner,
  Answer,
} from "src/app/models/stackExchange.model";
import { fadeInOnEnterAnimation } from "angular-animations";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faGetPocket,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { UserAuth } from "../../../models/user.model";

@Component({
  selector: "question-card",
  templateUrl: "./question-card.component.html",
  styleUrls: ["./question-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOnEnterAnimation()],
})
export class QuestionCardComponent implements OnInit {
  @Input() public question: Question;
  @Input() public selectedTagNames: Set<string> = new Set();
  @Input() public userAuth: UserAuth;
  @Output() public onAddToPocket: EventEmitter<any> = new EventEmitter();

  public isExpanded: boolean;

  public title: string;
  public owner: Owner;
  public rawHtml: string;
  public rawMarkdown: string;
  public viewCount: number;
  public answerCount: number;
  public upvoteCount: number;
  public downvoteCount: number;
  public creationDate: string;
  public lastEditDate: string;
  public link: string;
  public tags: Array<Tag>;
  public answers: Array<Answer>;

  public closeIcon = faTimes;
  public pocketIcon = faGetPocket;
  public stackOverflowIcon = faStackOverflow;

  constructor() {}

  ngOnInit(): void {
    this.isExpanded = false;

    this.title = parseHtmlEntities(this.question.title);
    this.owner = this.question.owner;
    this.rawHtml = this.question.body;
    this.rawMarkdown = this.question.body_markdown;

    this.viewCount = this.question.view_count;
    this.answerCount = this.question.answer_count;
    this.upvoteCount = this.question.up_vote_count;
    this.downvoteCount = this.question.down_vote_count;
    this.creationDate = parseUnixTimestamp(this.question.creation_date);
    this.lastEditDate = parseUnixTimestamp(this.question.last_edit_date);
    this.link = this.question.link;
    this.tags = this.question.tags;
  }

  public onCardClicked(event): void {
    event.stopPropagation();

    if (!this.isExpanded) {
      document.getElementById(this.cardId).scrollIntoView({ block: "start" });
      this.isExpanded = true;
    }
  }

  public get cardId(): string {
    return `question-card-${this.question.question_id}`;
  }

  public onCloseIconClicked(event): void {
    event.stopPropagation();
    this.isExpanded = false;
  }

  public onStackOverflowIconClicked(event): void {
    event.stopPropagation();
    window.open(this.link, "_blank");
  }

  public onGetPocketIconClicked(event): void {
    event.stopPropagation();
    this.onAddToPocket.emit({
      url: this.link,
      title: this.title,
      tags: this.tags.join(","),
    });
  }
}
