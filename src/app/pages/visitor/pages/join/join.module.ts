import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { JoinComponent } from './join.component';
import { SpinnerModule } from '../../components/spinner/spinner.module';
import { AuthComponent } from './components/auth/auth.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CovidChecklistComponent } from './components/covid-checklist/covid-checklist.component';
import { FinishJoinComponent } from './components/finish-join/finish-join.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
@NgModule({
  declarations: [
    JoinComponent,
    AuthComponent,
    CovidChecklistComponent,
    FinishJoinComponent,
    PersonalDetailsComponent,
  ],
  imports: [
    CommonModule,
    JoinRoutingModule,
    SpinnerModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class JoinModule {}
