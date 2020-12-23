import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardroomRoutingModule } from './boardroom-routing.module';
import { BoardroomComponent } from './boardroom.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store/index';
import { SpinnerModule } from '@app/shared/indicators';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CreateNewBoardroomDialogComponent } from './boardroom-dialogs/create-new-boardroom-dialog/create-new-boardroom-dialog.component';
import { EditBoardroomDialogComponent } from './boardroom-dialogs/edit-boardroom-dialog/edit-boardroom-dialog.component';
import { DeleteBoardroomDialogComponent } from './boardroom-dialogs/delete-boardroom-dialog/delete-boardroom-dialog.component';
import { CreateMeetingDialogComponent } from './boardroom-dialogs/create-meeting-dialog/create-meeting-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { ViewMeetingsDialogComponent } from './boardroom-dialogs/view-meetings-dialog/view-meetings-dialog.component';
@NgModule({
  declarations: [
    BoardroomComponent,
    CreateNewBoardroomDialogComponent,
    EditBoardroomDialogComponent,
    DeleteBoardroomDialogComponent,
    CreateMeetingDialogComponent,
    ViewMeetingsDialogComponent,
  ],
  imports: [
    CommonModule,
    BoardroomRoutingModule,
    StoreModule.forFeature('boardrooms', reducers),
    EffectsModule.forFeature(effects),
    SpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule,
  ],
  exports: [BoardroomComponent],
})
export class BoardroomModule {}
