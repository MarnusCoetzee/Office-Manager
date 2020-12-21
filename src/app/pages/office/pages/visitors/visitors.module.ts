import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorsRoutingModule } from './visitors-routing.module';
import { VisitorsComponent } from './visitors.component';

@NgModule({
  declarations: [VisitorsComponent],
  imports: [CommonModule, VisitorsRoutingModule],
  exports: [VisitorsComponent],
})
export class VisitorsModule {}
