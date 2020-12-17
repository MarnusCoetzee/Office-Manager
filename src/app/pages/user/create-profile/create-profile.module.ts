import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProfileComponent } from './create-profile.component';
import { CreateAccountRoutingModule } from './create-profile-routing.module';

@NgModule({
  declarations: [CreateProfileComponent],
  imports: [CommonModule, CreateAccountRoutingModule],
})
export class CreateProfileModule {}
