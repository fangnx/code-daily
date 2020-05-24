import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Question } from "src/app/app.model";

@Component({
  selector: "content-panel",
  templateUrl: "./content-panel.component.html",
  styleUrls: ["./content-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentPanelComponent implements OnChanges {
  @Input() questions: Question[];

  constructor() {}

  ngOnChanges() {
    console.log(this.questions);
  }
}
