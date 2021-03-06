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
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'leave',
    loadChildren: () =>
      import('./pages/leave/leave.module').then((m) => m.LeaveModule),
  },
  {
    path: 'finish',
    loadChildren: () =>
      import('./pages/finish/finish.module').then((m) => m.FinishModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorRoutingModule {}
