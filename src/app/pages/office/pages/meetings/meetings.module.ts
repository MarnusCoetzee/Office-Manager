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
@NgModule({
  declarations: [MeetingsComponent, CreateMeetingDialogComponent, UpdateMeetingDialogComponent, DeleteMeetingDialogComponent],
  imports: [
    CommonModule,
    MeetingsRoutingModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MeetingsComponent],
})
export class MeetingsModule {}
