import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardroomRoutingModule } from './boardroom-routing.module';
import { BoardroomComponent } from './boardroom.component';

@NgModule({
  declarations: [BoardroomComponent],
  imports: [CommonModule, BoardroomRoutingModule],
  exports: [BoardroomComponent],
})
export class BoardroomModule {}
