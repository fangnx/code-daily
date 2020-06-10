import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "navigation-panel",
  templateUrl: "./navigation-panel.component.html",
  styleUrls: ["./navigation-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationPanelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
