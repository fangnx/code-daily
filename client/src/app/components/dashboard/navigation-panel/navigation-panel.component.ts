import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../../state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import { UserAuth } from "src/app/models/user.model";
import { faUserCheck, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "navigation-panel",
  templateUrl: "./navigation-panel.component.html",
  styleUrls: ["./navigation-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationPanelComponent {
  @Input() public user?: UserAuth;

  public userIcon = faUserSecret;
  public userCheckedIcon = faUserCheck;
  public githubIcon = faGithub;

  constructor(private router: Router, private store: Store<AppState>) {}

  public openGithubRepo() {
    window.open("https://github.com/fangnx/code-daily", "_blank");
  }

  public navigateToUserManagement() {
    this.store.dispatch(AppActions.selectTag({ tag: null }));
    this.router.navigate(["/user"]);
  }

  public get hasUserLoggedIn(): boolean {
    return !!this.user && !!this.user.email;
  }
}
