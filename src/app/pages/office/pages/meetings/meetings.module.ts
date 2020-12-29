import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [MeetingsComponent],
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
