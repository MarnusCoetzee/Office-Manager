import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardroomRoutingModule } from './boardroom-routing.module';
import { BoardroomComponent } from './boardroom.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store/index';
import { SpinnerModule } from '@app/shared/indicators';
@NgModule({
  declarations: [BoardroomComponent],
  imports: [
    CommonModule,
    BoardroomRoutingModule,
    StoreModule.forFeature('boardrooms', reducers),
    EffectsModule.forFeature(effects),
    SpinnerModule,
  ],
  exports: [BoardroomComponent],
})
export class BoardroomModule {}
