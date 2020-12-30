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
import { MatSelectModule } from '@angular/material/select';
import { reducers, effects } from './store/index';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [
    MeetingsComponent,
    CreateMeetingDialogComponent,
    UpdateMeetingDialogComponent,
    DeleteMeetingDialogComponent,
    SpinnerComponent,
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
    MatSelectModule,
    MatSliderModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
  ],
  exports: [MeetingsComponent],
})
export class MeetingsModule {}
