import { Component, OnInit } from "@angular/core";
import { StackExchangeService } from "src/app/services/stackExchange.service";
import { Observable } from "rxjs";
import { map, tap, publishReplay, refCount } from "rxjs/operators";
import { Tag } from "src/app/app.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import {
  selectSelectedTags,
  selectQuestions,
} from "src/app/state/app.selectors";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public questions$: Observable<any[]>;
  public tags$: Observable<any[]>;
  public selectedTags$: Observable<Set<Tag>>;

  constructor(
    private store: Store<AppState>,
    private stackExchangeService: StackExchangeService
  ) {}

  ngOnInit() {
    this.questions$ = this.store.select((state) => selectQuestions(state));

    this.tags$ = this.stackExchangeService
      .getPopularTags()
      .pipe(map((res) => res["items"]));

    this.selectedTags$ = this.store.select((state) =>
      selectSelectedTags(state)
    );
  }

  public onTagSelected(tag: Tag): void {
    this.store.dispatch(AppActions.selectTag({ tag }));
  }

  public onTagUnselected(tag: Tag): void {
    this.store.dispatch(AppActions.unselectTag({ tag }));
  }
}
