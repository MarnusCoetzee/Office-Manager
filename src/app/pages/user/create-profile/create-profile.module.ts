import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProfileComponent } from './create-profile.component';
import { CreateAccountRoutingModule } from './create-profile-routing.module';
import { IndicatorsModule } from '@app/shared/indicators';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [CreateProfileComponent],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    IndicatorsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class CreateProfileModule {}
