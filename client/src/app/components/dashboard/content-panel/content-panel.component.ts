import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { Observable } from "rxjs";
import { selectQuestions } from "src/app/state/app.selectors";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.reducer";
import { Question } from "src/app/models/stackExchange.model";
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  bounceOnEnterAnimation,
} from "angular-animations";
import { ContentPanelService } from "src/app/services/contentPanel.service";

@Component({
  selector: "content-panel",
  templateUrl: "./content-panel.component.html",
  styleUrls: ["./content-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    bounceOnEnterAnimation(),
  ],
})
export class ContentPanelComponent implements OnInit, OnChanges {
  public questions$: Observable<Question[]>;
  public ready: boolean = false;

  constructor(
    private store: Store<AppState>,
    private contentPanelService: ContentPanelService
  ) {
    this.contentPanelService.isContentPanelReady$.subscribe((value) => {
      console.log(value);
      this.ready = value;
    });
  }

  ngOnInit() {
    this.questions$ = this.store.select((state) => selectQuestions(state));
  }

  ngOnChanges() {}
}
