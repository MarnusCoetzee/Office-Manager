import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'confirm-email',
    loadChildren: () =>
      import('./confirm-email/confirm-email.module').then(
        (m) => m.ConfirmEmailModule
      ),
  },
  {
    path: 'create-profile',
    loadChildren: () =>
      import('./create-profile/create-profile.module').then(
        (m) => m.CreateProfileModule
      ),
  },
  {
    path: 'view-profile',
    loadChildren: () =>
      import('./view-profile/view-profile.module').then(
        (m) => m.ViewProfileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
