import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorsRoutingModule } from './visitors-routing.module';
import { VisitorsComponent } from './visitors.component';
import { effects, reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { VisitorCardComponent } from './components/visitor-card/visitor-card.component';
import { MatCardModule } from '@angular/material/card';
import { VisitorSpinnerComponent } from './components/visitor-spinner/visitor-spinner.component';
@NgModule({
  declarations: [VisitorsComponent, VisitorCardComponent, VisitorSpinnerComponent],
  imports: [
    CommonModule,
    VisitorsRoutingModule,
    StoreModule.forFeature('visitors', reducers),
    EffectsModule.forFeature(effects),
    MatCardModule,
  ],
  exports: [VisitorsComponent],
})
export class VisitorsModule {}
