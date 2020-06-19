import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "navigation-panel",
  templateUrl: "./navigation-panel.component.html",
  styleUrls: ["./navigation-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationPanelComponent implements OnChanges {
  @Input() user?: any;

  constructor(private router: Router) {}

  ngOnChanges() {
    console.log(this.user);
  }

  public navigateToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  public navigateToUserManagement() {
    this.router.navigate(["/user"]);
  }

  public get hasUserLoggedIn(): boolean {
    return this.user && this.user.email;
  }
}
