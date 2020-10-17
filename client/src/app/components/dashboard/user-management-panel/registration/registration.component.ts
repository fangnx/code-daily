import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../state/app.reducer";
import * as AppActions from "../../../../state/app.actions";

@Component({
  selector: "registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  public isSubmitted: boolean;
  public text: string;

  // TODO: refactor the registration component & styles.
  constructor(
    private ref: ChangeDetectorRef,
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: [""],
      password: [""],
    });
    this.isSubmitted = false;
  }

  public onSubmit(): void {
    this.isSubmitted = true;
    this.userService
      .registerUser(this.registrationForm.value)
      .pipe(map((value) => value))
      .subscribe((value) => {
        if (value.isSuccessful) {
          this.text = "Registration Successful";
          this.ref.markForCheck();
          this.store.dispatch(AppActions.navigateToDashboard());
        } else {
          this.text = value.message["message"];
          this.ref.markForCheck();
        }
      });
  }
}
