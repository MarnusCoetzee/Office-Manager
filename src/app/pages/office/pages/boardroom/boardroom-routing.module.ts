import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardroomComponent } from './boardroom.component';

const routes: Routes = [
  {
    path: '',
    component: BoardroomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardroomRoutingModule {}
