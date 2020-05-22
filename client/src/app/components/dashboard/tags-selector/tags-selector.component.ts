import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "tags-selector",
  templateUrl: "./tags-selector.component.html",
  styleUrls: ["./tags-selector.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsSelectorComponent implements OnChanges {
  @Input() tags;
  constructor() {}

  ngOnChanges() {
    console.log(this.tags);
  }
}
