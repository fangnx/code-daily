import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "presentation-panel",
  templateUrl: "./presentation-panel.component.html",
  styleUrls: ["./presentation-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationPanelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
