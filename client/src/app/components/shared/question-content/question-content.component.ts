import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";

@Component({
  selector: "question-content",
  templateUrl: "./question-content.component.html",
  styleUrls: ["./question-content.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionContentComponent implements OnInit {
  @Input() contentRawHtml: string;
  @Input() contentRawMarkdown: string;

  ngOnInit() {}
}
