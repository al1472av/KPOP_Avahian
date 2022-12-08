import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from './dialog.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import {MatDialogModule}  from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,AppRoutingModule,BrowserAnimationsModule,HttpClientModule,
    MatButtonModule,DialogModule,MatDialogModule,MatIconModule
  ],
  
  providers: [UserService],
  bootstrap: [AppComponent,HttpClientModule ]
})
export class AppModule { }
