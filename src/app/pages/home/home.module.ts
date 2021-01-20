import { PipesModule } from '@app/custom-pipes/pipes/pipes.module';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { SpinnerModule } from '@app/shared/indicators';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CreateOfficeDialogComponent } from './dialogs/create-office-dialog/create-office-dialog.component';
import { EditOfficeDialogComponent } from './dialogs/edit-office-dialog/edit-office-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DeleteOfficeDialogComponent } from './dialogs/delete-office-dialog/delete-office-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { OfficeQrCodeDialogComponent } from './dialogs/office-qr-code-dialog/office-qr-code-dialog.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { NewMeetingCalendarComponent } from './dialogs/new-meeting-calendar/new-meeting-calendar.component'; // a pluginFullCalendarModule.registerPlugins([ // register FullCalendar plugins
FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);
@NgModule({
  declarations: [
    HomeComponent,
    CreateOfficeDialogComponent,
    EditOfficeDialogComponent,
    DeleteOfficeDialogComponent,
    OfficeQrCodeDialogComponent,
    LoadingSpinnerComponent,
    CalendarComponent,
    NewMeetingCalendarComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature('offices', reducers),
    EffectsModule.forFeature(effects),
    SpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    FormsModule,
    NgxQRCodeModule,
    MatTabsModule,
    FullCalendarModule,
    PipesModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class HomeModule {}
