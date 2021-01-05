import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { EditProfileComponent } from './dialogs/edit-profile/edit-profile.component';
import { DeleteProfileComponent } from './dialogs/delete-profile/delete-profile.component';

@NgModule({
  declarations: [UserComponent, EditProfileComponent, DeleteProfileComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
