import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";

@Component({
  selector: "setting-card",
  templateUrl: "./setting-card.component.html",
  styleUrls: ["./setting-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingCardComponent implements OnInit {
  @Input() public title: string;
  @Input() public clarityIconClass?: string;

  constructor() {}

  ngOnInit() {}

  public onCardClicked(): void {
    //
  }
}
