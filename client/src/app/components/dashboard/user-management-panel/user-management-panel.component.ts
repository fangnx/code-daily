import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "user-management-panel",
  templateUrl: "./user-management-panel.component.html",
  styleUrls: ["./user-management-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserManagementPanelComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  public onRegisterClicked(): void {
    this.router.navigate(["/user/register"]);
  }

  public onLoginClicked(): void {
    this.router.navigate(["/user/login"]);
  }

  public onLogoutClicked(): void {
    this.userService.logoutUser();
    this.router.navigate(["/dashboard"]);
  }
}
