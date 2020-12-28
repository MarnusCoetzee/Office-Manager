import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './office.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BoardroomModule } from './pages/boardroom/boardroom.module';
import { VisitorsModule } from './pages/visitors/visitors.module';
import { StaffModule } from './pages/staff/staff.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '@app/pages/home/store';
import { SpinnerModule } from '@app/shared/indicators';
import { MeetingsModule } from './pages/meetings/meetings.module';
@NgModule({
  declarations: [OfficeComponent],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    MatTabsModule,
    BoardroomModule,
    VisitorsModule,
    StaffModule,
    MeetingsModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forFeature('offices', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class OfficeModule {}
