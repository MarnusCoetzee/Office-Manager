import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProfileRoutingModule } from './view-profile-routing.module';
import { ViewProfileComponent } from './view-profile.component';
import { UserLoadingModule } from '../components/user-loading/user-loading.module';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from '@app/custom-pipes/pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ViewProfileComponent],
  imports: [
    CommonModule,
    ViewProfileRoutingModule,
    UserLoadingModule,
    MatCardModule,
    PipesModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ViewProfileModule {}
