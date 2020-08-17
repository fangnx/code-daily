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
import { AppState } from "src/app/state/app.reducer";
import { selectUserAuth, selectUser } from "src/app/state/app.selectors";
import { tap, map } from "rxjs/operators";
import { PocketService } from "src/app/services/pocket.service";
import { combineLatest, Subscription } from "rxjs";

@Component({
  selector: "user-management-panel",
  templateUrl: "./user-management-panel.component.html",
  styleUrls: ["./user-management-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserManagementPanelComponent implements OnInit, OnDestroy {
  public hasUserLoggedIn: boolean = false;
  public hasUserConnectedWithPocket: boolean = false;
  private userAuthSubscription: Subscription;
  private userSubscription: Subscription;
  private pocketConnectionSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private userService: UserService,
    private pocketService: PocketService
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

    this.userSubscription = this.store
      .select((state) => selectUser(state))
      .pipe(
        tap((user) => {
          if (user && user.pocketAccessToken) {
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
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
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
    await this.pocketService.redirectToPocket();
  }

  public onLogoutClicked(): void {
    this.userService.logoutUser();
  }

  public onManageSubscriptionClicked(): void {
    this.router.navigate(["/subscription"]);
  }
}
