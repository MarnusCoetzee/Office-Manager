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
@NgModule({
  declarations: [
    BoardroomComponent,
    CreateNewBoardroomDialogComponent,
    EditBoardroomDialogComponent,
    DeleteBoardroomDialogComponent,
    CreateMeetingDialogComponent,
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
  ],
  exports: [BoardroomComponent],
})
export class BoardroomModule {}
