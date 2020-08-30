import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnInit,
} from "@angular/core";

@Component({
  selector: "simple-tag",
  templateUrl: "./simple-tag.component.html",
  styleUrls: ["./simple-tag.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTagComponent {
  @Input() public text: string;
}
