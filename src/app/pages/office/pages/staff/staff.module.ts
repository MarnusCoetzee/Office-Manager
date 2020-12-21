import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';

@NgModule({
  declarations: [StaffComponent],
  imports: [CommonModule, StaffRoutingModule],
  exports: [StaffComponent],
})
export class StaffModule {}
