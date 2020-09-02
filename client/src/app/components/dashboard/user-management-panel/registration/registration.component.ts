import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  public isSubmitted: boolean;

  constructor(
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
      .pipe()
      .subscribe();
  }
}
