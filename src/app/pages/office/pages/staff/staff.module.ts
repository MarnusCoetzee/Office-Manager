import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { SpinnerModule } from '@app/shared/indicators';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [StaffComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    StoreModule.forFeature('staff', reducers),
    EffectsModule.forFeature(effects),
    SpinnerModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [StaffComponent],
})
export class StaffModule {}
