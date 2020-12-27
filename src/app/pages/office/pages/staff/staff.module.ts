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
import { MatIconModule } from '@angular/material/icon';
import { CreateStaffDialogComponent } from './dialogs/create-staff-dialog/create-staff-dialog.component';
import { EditStaffDialogComponent } from './dialogs/edit-staff-dialog/edit-staff-dialog.component';
import { DeleteStaffDialogComponent } from './dialogs/delete-staff-dialog/delete-staff-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    StaffComponent,
    CreateStaffDialogComponent,
    EditStaffDialogComponent,
    DeleteStaffDialogComponent,
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    StoreModule.forFeature('staff', reducers),
    EffectsModule.forFeature(effects),
    SpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
  ],
  exports: [StaffComponent],
})
export class StaffModule {}
