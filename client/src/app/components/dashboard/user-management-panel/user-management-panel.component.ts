import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  Inject,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import { selectUserAuth } from "src/app/state/app.selectors";
import { tap, map } from "rxjs/operators";
import { PocketService } from "src/app/services/pocket.service";
import { PocketRequestToken } from "src/app/models/pocket.model";
import { combineLatest, Subscription } from "rxjs";

@Component({
  selector: "user-management-panel",
  templateUrl: "./user-management-panel.component.html",
  styleUrls: ["./user-management-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserManagementPanelComponent implements OnInit, OnDestroy {
  public hasUserLoggedIn: boolean = false;
  private userAuthSubscription: Subscription;
  private pocketConnectionSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private userService: UserService,
    private pocketService: PocketService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.userAuthSubscription = this.store
      .select((state) => selectUserAuth(state))
      .pipe(
        tap((userAuth) => {
          if (userAuth && userAuth.email) {
            this.hasUserLoggedIn = true;
          }
        })
      )
      .subscribe();

    this.pocketConnectionSubscription = combineLatest(
      this.route.paramMap,
      this.store.select((state) => selectUserAuth(state))
    )
      .pipe(
        map(([params, userAuth]) => {
          const requestToken: string = params.get("pocket_request_token");
          if (requestToken) {
            this.pocketService.authorize(userAuth.email, requestToken);
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.userAuthSubscription) {
      this.userAuthSubscription.unsubscribe();
    }
    if (this.pocketConnectionSubscription) {
      this.pocketConnectionSubscription.unsubscribe();
    }
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

    let url = new URL("http://getpocket.com/auth/authorize");
    url.searchParams.append("request_token", requestToken.code);
    url.searchParams.append(
      "redirect_uri",
      `http://codedaily.info/user/pocket/${requestToken.code}`
    );
    alert(url.toString());
    this.document.location.href = url.toString();
  }

  public onLogoutClicked(): void {
    this.userService.logoutUser();
  }

  public onManageSubscriptionClicked(): void {
    this.router.navigate(["/subscription"]);
  }
}
