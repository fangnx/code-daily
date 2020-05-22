import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "question-card-board",
  templateUrl: "./question-card-board.component.html",
  styleUrls: ["./question-card-board.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardBoardComponent implements OnChanges {
  @Input() questions: any[];
  @Input() tags: any[];

  constructor() {}

  ngOnChanges() {
    console.log(this.questions);
    console.log(this.tags);
  }
}
