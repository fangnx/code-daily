import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

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
    this.userService.registerUser(this.registrationForm.value);
  }
}
