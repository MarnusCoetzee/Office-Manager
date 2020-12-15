import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from '@app/shared/utils';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  hide = true;
  signupForm: FormGroup;
  regexErrors = regexErrors;
  constructor(private fb: FormBuilder) {}

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
}
