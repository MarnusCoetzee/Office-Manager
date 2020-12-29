import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateMeetingDialogComponent } from './dialogs/create-meeting-dialog/create-meeting-dialog.component';
import { UpdateMeetingDialogComponent } from './dialogs/update-meeting-dialog/update-meeting-dialog.component';
import { DeleteMeetingDialogComponent } from './dialogs/delete-meeting-dialog/delete-meeting-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { reducers, effects } from './store/index';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    MeetingsComponent,
    CreateMeetingDialogComponent,
    UpdateMeetingDialogComponent,
    DeleteMeetingDialogComponent,
  ],
  imports: [
    CommonModule,
    MeetingsRoutingModule,
    StoreModule.forFeature('meetings', reducers),
    EffectsModule.forFeature(effects),
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [MeetingsComponent],
})
export class MeetingsModule {}
