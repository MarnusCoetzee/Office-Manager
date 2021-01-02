import { Component, OnDestroy, OnInit } from '@angular/core';
import * as fromRoot from '../../../store';
import * as fromUser from '../../../store/user';
import { Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from '@app/shared/utils';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit, OnDestroy {
  user$: Observable<fromUser.User>;
  loading$: Observable<boolean>;
  basicDetailsForm: FormGroup;
  private destroy = new Subject<any>();
  regex = regex;
  constructor(private store: Store<fromRoot.State>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(fromUser.getUser));
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
    this.initForm();
  }

  private initForm() {
    this.basicDetailsForm = this.fb.group({
      firstName: [
        null,
        {
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      lastName: [
        null,
        {
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      cellNumber: [
        null,
        {
          validators: [Validators.required, Validators.pattern(regex.phone)],
        },
      ],
    });
  }

  onClickAddDetails() {
    if (this.basicDetailsForm.valid) {
      const value = this.basicDetailsForm.value;
      const firstName = value.firstName;
      const lastName = value.lastName;
      const cellNumber = value.cellNumber;
      const roleId = 'Owner';
      const photoUrl =
        'https://firebasestorage.googleapis.com/v0/b/office-app-f5811.appspot.com/o/defaultavatar.png?alt=media&token=08ef2a66-0808-4056-99cd-e7acfdae9988';
      const user = {
        firstName,
        lastName,
        cellNumber,
        photoUrl,
        roleId,
      };
      console.log(user);
      this.store.dispatch(new fromUser.Create(user));
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy.next();
    this.destroy.complete();
  }
}
