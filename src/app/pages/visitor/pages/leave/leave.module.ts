import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './leave.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LeaveComponent],
  imports: [CommonModule, LeaveRoutingModule, MatButtonModule],
})
export class LeaveModule {}
