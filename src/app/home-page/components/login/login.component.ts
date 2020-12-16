import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AuthBottomSheetComponent } from '@app/home-page/auth-bottom-sheet/auth-bottom-sheet.component';
import { regex, regexErrors } from '@app/shared/utils';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store';
import * as fromUser from '../../../store/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  hide = true;
  regexErrors = regexErrors;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private bsRef: MatBottomSheetRef<AuthBottomSheetComponent>
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
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
          validators: [Validators.required],
        },
      ],
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      const value = this.loginForm.value;

      const credentials: fromUser.EmailPasswordCredentials = {
        email: value.email,
        password: value.password,
      };

      this.store.dispatch(new fromUser.SignInEmail(credentials));
      this.bsRef.dismiss();
    } else {
      return;
    }
  }
}
