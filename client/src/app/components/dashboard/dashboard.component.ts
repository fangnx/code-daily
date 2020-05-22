import { Component, OnInit } from "@angular/core";
import { StackExchangeService } from "src/app/services/stackExchange.service";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public questions$: Observable<any[]>;
  public tags$: Observable<any[]>;

  constructor(private stackExchangeService: StackExchangeService) {}

  ngOnInit() {
    this.questions$ = this.stackExchangeService
      .getQuestionsByTags(["python"])
      .pipe(map((res) => res["items"]));

    this.tags$ = this.stackExchangeService
      .getPopularTags()
      .pipe(map((res) => res["items"]));
  }
}
