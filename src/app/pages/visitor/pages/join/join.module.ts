import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { JoinComponent } from './join.component';
import { SpinnerModule } from '../../components/spinner/spinner.module';

@NgModule({
  declarations: [JoinComponent],
  imports: [CommonModule, JoinRoutingModule, SpinnerModule],
})
export class JoinModule {}
