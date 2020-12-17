import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { SpinnerModule } from '@app/shared/indicators';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CreateOfficeDialogComponent } from './dialogs/create-office-dialog/create-office-dialog.component';
import { EditOfficeDialogComponent } from './dialogs/edit-office-dialog/edit-office-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    CreateOfficeDialogComponent,
    EditOfficeDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature('offices', reducers),
    EffectsModule.forFeature(effects),
    SpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class HomeModule {}
