import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { map, catchError } from "rxjs/operators";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitted: boolean;
  public errorText: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [""],
      password: [""],
    });
    this.isSubmitted = false;
    this.errorText = "";
    console.log(localStorage.getItem("user"));
  }

  public onSubmit(): void {
    this.isSubmitted = true;
    this.errorText = "";
    this.userService
      .loginUser(this.loginForm.value)
      .pipe(map((value) => value))
      .subscribe(
        (value) => {
          console.log(value);
        },
        (error) => {
          this.errorText = error;
        }
      );
  }
}
