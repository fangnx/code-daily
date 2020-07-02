import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "setting-card",
  templateUrl: "./setting-card.component.html",
  styleUrls: ["./setting-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingCardComponent {
  @Input() public title: string;
  @Input() public clarityIconClass?: string;
  @Output() public onCardClicked: EventEmitter<void> = new EventEmitter();

  public onCardClickedHandler(): void {
    this.onCardClicked.emit();
  }
}
