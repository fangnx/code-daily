import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "navigation-panel",
  templateUrl: "./navigation-panel.component.html",
  styleUrls: ["./navigation-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationPanelComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public navigateToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  public navigateToUserManagement() {
    this.router.navigate(["/user"]);
  }
}
