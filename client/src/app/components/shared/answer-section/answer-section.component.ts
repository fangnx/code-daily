import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { Answer } from "src/app/app.model";
@Component({
  selector: "answer-section",
  templateUrl: "./answer-section.component.html",
  styleUrls: ["./answer-section.component.scss"],
})
export class AnswerSectionComponent implements OnInit {
  @Input() answer: Answer;

  public ownerName: string;
  public ownerProfileImageUrl: string;
  public ownerReputation: number;
  public answerUpvotes: number;
  public answerDownvotes: number;
  public answerContentMarkdown: string;

  ngOnInit() {
    this.ownerName = this.answer.owner.display_name;
    this.ownerProfileImageUrl = this.answer.owner.profile_image;
    this.ownerReputation = this.answer.owner.reputation;
    this.answerContentMarkdown = this.answer.body_markdown;
    this.answerUpvotes = this.answer.up_vote_count;
    this.answerDownvotes = this.answer.down_vote_count;
  }

  public get contentRawHtml() {
    return this.answer.body;
  }
}
