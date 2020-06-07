import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "answer-badge",
  templateUrl: "./answer-badge.component.html",
  styleUrls: ["./answer-badge.component.scss"],
})
export class AnswerBadgeComponent implements OnInit {
  @Input() ownerName: string;
  @Input() ownerProfileImageUrl: string;
  @Input() creationDate: string;

  constructor() {}

  ngOnInit() {}
}
