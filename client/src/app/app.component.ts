import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import { selectAppState } from "./state/app.selectors";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // TODO: remove this.
    this.store
      .select((state) => selectAppState(state))
      .pipe(tap((v) => console.log(v)))
      .subscribe();

    this.store.dispatch(AppActions.fetchCurrentUserAuth());

    this.store.dispatch(AppActions.selectTag({ tag: { name: "Javascript" } }));
  }
}
