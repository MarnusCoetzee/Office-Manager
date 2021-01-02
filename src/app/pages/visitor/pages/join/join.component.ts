import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { DatabaseService } from './services/database.service';
import { regex } from '@app/shared/utils/regex';
import { Visitor } from '@app/models/backend';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JoinComponent implements OnInit {
  regex = regex;
  authSubscription: Subscription;
  isAuth: boolean;
  officeId: string;
  isLoading: boolean;
  personalDetailsForm: FormGroup;
  covidSymptomsForm: FormGroup;
  visitorDetails: Visitor;
  visitorDetailsSubscription: Subscription;
  uid: string;
  symptoms: Array<any> = [
    { value: 'Fever or chills' },
    { value: 'Coughing' },
    { value: 'Shortness of breath or difficulty breathing' },
    { value: 'Fatigue' },
    { value: 'Muscle or body aches' },
    { value: 'Recent loss of taste or smell' },
    { value: 'Headaches' },
    { value: 'Sore throat' },
    { value: 'Congestion' },
    { value: 'Nausea or vomiting' },
    { value: 'Diarrhea' },
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private dbService: DatabaseService,
    private fb: FormBuilder,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.authSubscription = this.afAuth.authState.subscribe((authResult) => {
      if (authResult) {
        this.isAuth = true;
        this.uid = authResult.uid;
      } else {
        this.isAuth = false;
      }
    });
    if (this.isAuth) {
      this.visitorDetailsSubscription = this.db
        .collection('visitors')
        .doc(this.uid)
        .valueChanges()
        .subscribe((visitorResult: Visitor) => {
          this.visitorDetails = visitorResult;
        });
    }
    this.initPersonalDetailsForm();
    this.initCovidScreeningForm();
  }

  private initPersonalDetailsForm() {
    this.personalDetailsForm = this.fb.group({
      firstName: [null, { validators: [Validators.required] }],
      lastName: [null, { validators: [Validators.required] }],
      cellNumber: [
        null,
        {
          validators: [Validators.required, Validators.pattern(regex.numbers)],
        },
      ],
      idNumber: [
        null,
        {
          validators: [
            Validators.required,
            Validators.pattern(regex.numbers),
            Validators.pattern(regex.idNumber),
            Validators.minLength(12),
          ],
        },
      ],
    });
  }

  private initCovidScreeningForm() {
    this.covidSymptomsForm = this.fb.group({
      temperature: [
        null,
        {
          validators: [
            Validators.required,
            Validators.pattern(regex.numbers),
            Validators.max(38),
          ],
        },
      ],
    });
  }

  async addBasicDetailsToDB() {
    const officeId = this.officeId;
    const id = await (await this.afAuth.currentUser).uid;
    const firstName = this.personalDetailsForm.value.firstName;
    const lastName = this.personalDetailsForm.value.lastName;
    const cellNumber = this.personalDetailsForm.value.cellNumber;
    const idNumber = this.personalDetailsForm.value.idNumber;
    const visitor: Visitor = {
      id,
      officeId,
      firstName,
      lastName,
      cellNumber,
      idNumber,
    };
    this.dbService.onClickSaveBasicDetailsToDB(visitor);
  }

  async onClickAddTemperature() {
    const officeId = this.officeId;
    const id = await (await this.afAuth.currentUser).uid;
    const visitorTemperature = this.covidSymptomsForm.value.temperature;
    const visitor: Visitor = {
      id,
      officeId,
      visitorTemperature,
    };
    this.dbService.onClickSaveTemperatureToDB(visitor);
  }

  async onClickFinish() {
    const officeId = this.officeId;
    this.dbService.finishCreateVisitor(officeId);
  }

  onClickInitUser() {
    const officeId = this.officeId;
    this.dbService.onClickInitUser(officeId);
  }
}
