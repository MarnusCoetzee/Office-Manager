import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './office.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BoardroomModule } from './pages/boardroom/boardroom.module';
import { VisitorsModule } from './pages/visitors/visitors.module';
import { StaffModule } from './pages/staff/staff.module';

@NgModule({
  declarations: [OfficeComponent],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    MatTabsModule,
    BoardroomModule,
    VisitorsModule,
    StaffModule,
  ],
})
export class OfficeModule {}
