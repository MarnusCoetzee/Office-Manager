import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardroomRoutingModule } from './boardroom-routing.module';
import { BoardroomComponent } from './boardroom.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '@app/pages/home/store';
@NgModule({
  declarations: [BoardroomComponent],
  imports: [
    CommonModule,
    BoardroomRoutingModule,
    StoreModule.forFeature('offices', reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [BoardroomComponent],
})
export class BoardroomModule {}
