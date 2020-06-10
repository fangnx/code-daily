import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "user-management-panel",
  templateUrl: "./user-management-panel.component.html",
  styleUrls: ["./user-management-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserManagementPanelComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
