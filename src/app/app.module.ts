import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardModule } from './dashboard/dashboard.module';
import { ToggleSidebarModule } from './navigation/toggle-sidebar/toggle-sidebar.module';
import { HeaderModule } from './navigation/header/header.module';
import { SidebarModule } from './navigation/sidebar/sidebar.module';

import { TerminalModule } from './af/terminal/terminal.module';

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
    HeaderModule,
    SidebarModule,
    ToggleSidebarModule,
    TerminalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
