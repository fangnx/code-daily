import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  OnInit,
} from "@angular/core";
import { Observable } from "rxjs";
import { selectQuestions } from "src/app/state/app.selectors";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import { Question } from "src/app/models/stackExchange.model";

@Component({
  selector: "content-panel",
  templateUrl: "./content-panel.component.html",
  styleUrls: ["./content-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentPanelComponent implements OnInit, OnChanges {
  public questions$: Observable<Question[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.questions$ = this.store.select((state) => selectQuestions(state));
  }

  ngOnChanges() {}
}
