import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { AuthBottomSheetComponent } from './auth-bottom-sheet/auth-bottom-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
@NgModule({
  declarations: [HomePageComponent, AuthBottomSheetComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatTabsModule,
  ],
})
export class HomePageModule {}
