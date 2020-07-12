import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import { selectUserAuth } from "src/app/state/app.selectors";
import { tap } from "rxjs/operators";

@Component({
  selector: "user-management-panel",
  templateUrl: "./user-management-panel.component.html",
  styleUrls: ["./user-management-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserManagementPanelComponent implements OnInit {
  public hasUserLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.store
      .select((state) => selectUserAuth(state))
      .pipe(
        tap((userAuth) => {
          if (userAuth && userAuth.email) {
            this.hasUserLoggedIn = true;
          }
        })
      )
      .subscribe();
  }

  public onRegisterClicked(): void {
    this.router.navigate(["/user/register"]);
  }

  public onLoginClicked(): void {
    this.router.navigate(["/user/login"]);
  }

  public onLogoutClicked(): void {
    this.userService.logoutUser();
  }

  public onManageSubscriptionClicked(): void {
    this.router.navigate(["/subscription"]);
  }
}
