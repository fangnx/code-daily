import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { map } from "rxjs/operators";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitted: boolean;
  public text: string;

  // TODO: refactor the login component & styles.
  constructor(
    private ref: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [""],
      password: [""],
    });
    this.isSubmitted = false;
    this.text = "";
  }

  public onSubmit(): void {
    this.isSubmitted = true;
    this.text = "";
    this.userService
      .loginUser(this.loginForm.value)
      .pipe(map((value) => value))
      .subscribe(
        () => {},
        (error) => {
          if (!error) {
            this.text = "Login Successful!";
          } else {
            this.text = error;
          }
          this.ref.markForCheck();
        }
      );
  }
}
