import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from './visitor.component';

const routes: Routes = [
  {
    path: '',
    component: VisitorComponent,
  },
  {
    path: 'join',
    loadChildren: () =>
      import('./pages/join/join.module').then((m) => m.JoinModule),
  },
  {
    path: 'leave',
    loadChildren: () =>
      import('./pages/leave/leave.module').then((m) => m.LeaveModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorRoutingModule {}
