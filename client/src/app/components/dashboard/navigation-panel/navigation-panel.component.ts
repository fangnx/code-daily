import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { UserAuth } from "src/app/models/user.model";

@Component({
  selector: "navigation-panel",
  templateUrl: "./navigation-panel.component.html",
  styleUrls: ["./navigation-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationPanelComponent implements OnChanges {
  @Input() user?: UserAuth;

  constructor(private router: Router) {}

  ngOnChanges() {}

  public navigateToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  public navigateToUserManagement() {
    this.router.navigate(["/user"]);
  }

  public get hasUserLoggedIn(): boolean {
    return !!this.user && !!this.user.email;
  }
}
