import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AuthBottomSheetComponent } from '@app/home-page/auth-bottom-sheet/auth-bottom-sheet.component';
import { regex, regexErrors } from '@app/shared/utils';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store';
import * as fromUser from '../../../store/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  hide = true;
  signupForm: FormGroup;
  regexErrors = regexErrors;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private matbottomsheet: MatBottomSheetRef<AuthBottomSheetComponent>
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        email: [
          null,
          {
            validators: [
              Validators.required,
              Validators.maxLength(128),
              Validators.pattern(regex.email),
            ],
          },
        ],
        password: [
          null,
          {
            validators: [
              Validators.required,
              Validators.minLength(6),
              Validators.pattern(regex.password),
            ],
          },
        ],
        confirmPassword: [
          null,
          {
            validators: [
              Validators.required,
              Validators.minLength(6),
              Validators.pattern(regex.password),
            ],
          },
        ],
      },
      { validator: this.confirmPasswordValidator }
    );
  }

  private confirmPasswordValidator(
    group: FormGroup
  ): { [key: string]: boolean } {
    const password = group.get('password');
    const confirm = group.get('confirmPassword');
    return confirm.value && password.value !== confirm.value
      ? { repeat: true }
      : null;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const value = this.signupForm.value;
      const credentials: fromUser.EmailPasswordCredentials = {
        email: value.email,
        password: value.password,
      };
      this.store.dispatch(new fromUser.SignUpEmail(credentials));
      this.matbottomsheet.dismiss();
    } else {
      return;
    }
  }
}
