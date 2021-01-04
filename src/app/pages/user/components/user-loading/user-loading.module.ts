import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoadingComponent } from './user-loading.component';

@NgModule({
  declarations: [UserLoadingComponent],
  imports: [CommonModule],
  exports: [UserLoadingComponent],
})
export class UserLoadingModule {}
