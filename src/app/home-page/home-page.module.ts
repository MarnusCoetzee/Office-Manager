import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { AuthBottomSheetComponent } from './auth-bottom-sheet/auth-bottom-sheet.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
// Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { GoogleSigninComponent } from './components/google-signin/google-signin.component';

import { SpinnerModule } from '../shared/indicators/spinner/spinner.module';
import { HomeSpinnerComponent } from './components/home-spinner/home-spinner.component';
@NgModule({
  declarations: [
    HomePageComponent,
    AuthBottomSheetComponent,
    LoginComponent,
    SignupComponent,
    GoogleSigninComponent,
    HomeSpinnerComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    SpinnerModule,
  ],
})
export class HomePageModule {}
