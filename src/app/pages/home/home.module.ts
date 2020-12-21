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
import { OfficeQrCodeDialogComponent } from './dialogs/office-qr-code-dialog/office-qr-code-dialog.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
@NgModule({
  declarations: [
    HomeComponent,
    CreateOfficeDialogComponent,
    EditOfficeDialogComponent,
    DeleteOfficeDialogComponent,
    OfficeQrCodeDialogComponent,
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
  ],
})
export class HomeModule {}
