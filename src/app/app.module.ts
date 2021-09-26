import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { ToggleSidebarModule } from './navigation/toggle-sidebar/toggle-sidebar.module';
import { HeaderModule } from './navigation/header/header.module';
import { SidebarModule } from './navigation/sidebar/sidebar.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    HomeModule,
    HeaderModule,
    SidebarModule,
    ToggleSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
