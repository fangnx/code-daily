import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Question } from "src/app/app.model";

@Component({
  selector: "question-card-board",
  templateUrl: "./question-card-board.component.html",
  styleUrls: ["./question-card-board.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardBoardComponent implements OnChanges {
  @Input() questions: Question[];

  constructor() {}

  ngOnChanges() {
    console.log(this.questions);
  }
}
