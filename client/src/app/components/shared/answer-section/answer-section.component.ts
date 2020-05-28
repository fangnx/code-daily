import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
@Component({
  selector: "answer-section",
  templateUrl: "./answer-section.component.html",
  styleUrls: ["./answer-section.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AnswerSectionComponent implements OnInit {
  @Input() answer: any;

  constructor() {}

  ngOnInit() {}

  public get contentRawHtml() {
    return this.answer["body"];
  }
}
