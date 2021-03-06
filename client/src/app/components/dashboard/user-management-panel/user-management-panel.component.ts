import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  Inject,
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { Store } from "@ngrx/store";
import * as AppActions from "../../../state/app.actions";
import { combineLatest, Subscription } from "rxjs";
import { selectUserAuth } from "src/app/state/app.selectors";
import { AppState } from "src/app/state/app.reducer";
import { tap } from "rxjs/operators";
import { PocketService } from "src/app/services/pocket.service";
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from "angular-animations";

@Component({
  selector: "user-management-panel",
  templateUrl: "./user-management-panel.component.html",
  styleUrls: ["./user-management-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ delay: 25 }),
  ],
})
export class UserManagementPanelComponent implements OnInit, OnDestroy {
  public hasUserLoggedIn: boolean;
  public hasUserConnectedWithPocket: boolean;
  private userAuthSubscription: Subscription;
  private pocketConnectionSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private userService: UserService,
    private pocketService: PocketService
  ) {}

  async ngOnInit(): Promise<void> {
    this.userAuthSubscription = this.store
      .select((state) => selectUserAuth(state))
      .pipe(
        tap((userAuth) => {
          if (userAuth && userAuth.email) {
            this.hasUserLoggedIn = true;
          }
          if (userAuth && userAuth.pocketAccessToken) {
            this.hasUserConnectedWithPocket = true;
          }
        })
      )
      .subscribe();

    this.pocketConnectionSubscription = combineLatest(
      this.route.paramMap,
      this.store.select((state) => selectUserAuth(state))
    )
      .pipe(
        tap(async ([params, userAuth]) => {
          const requestToken: string = params.get("pocket_request_token");
          // TODO: move the logic to NgRx effects.
          if (requestToken) {
            this.store.dispatch(
              AppActions.authorizePocket({
                email: userAuth.email,
                requestToken,
              })
            );
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
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

  public async onPocketClicked() {
    if (this.hasUserConnectedWithPocket) {
      return;
    }
    await this.pocketService.redirectToPocket();
  }

  public onLogoutClicked(): void {
    this.userService.logoutUser();
  }

  public onManageSubscriptionClicked(): void {
    this.router.navigate(["/subscription"]);
  }

  public get pocketCardTitle(): string {
    return this.hasUserConnectedWithPocket
      ? "Pocket Connected"
      : "Connect to Pocket";
  }
}
