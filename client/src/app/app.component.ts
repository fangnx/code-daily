import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./state/app.reducer";
import * as AppActions from "src/app/state/app.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(AppActions.fetchCurrentUser());

    this.store.dispatch(AppActions.selectTag({ tag: "javascript" }));
  }
}
