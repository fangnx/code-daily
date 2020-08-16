import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import { selectUserAuth } from "src/app/state/app.selectors";
import { tap, switchMap } from "rxjs/operators";
import { PocketService } from "src/app/services/pocket.service";
import {
  PocketRequestToken,
  PocketAccessToken,
} from "src/app/models/pocket.model";
import { EMPTY } from "rxjs";

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
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private userService: UserService,
    private pocketService: PocketService
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

    this.route.paramMap
      .pipe(
        switchMap((params) => {
          console.log(params.get("pocket_request_token"));
          return EMPTY;
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

  public async onConnectToPocketClicked() {
    const requestToken: PocketRequestToken = await this.pocketService.getRequestToken();
    if (!requestToken || !requestToken.code) {
      return;
    }

    let url = new URL("https://getpocket.com/auth/authorize");
    url.searchParams.append("request_token", requestToken.code);
    url.searchParams.append(
      "redirect_uri",
      `http://codedaily.info/${requestToken.code}`
    );
    window.location.href = url.toString();

    const accessToken: PocketAccessToken = await this.pocketService.getAccessToken(
      requestToken.code
    );
  }

  public onLogoutClicked(): void {
    this.userService.logoutUser();
  }

  public onManageSubscriptionClicked(): void {
    this.router.navigate(["/subscription"]);
  }
}
