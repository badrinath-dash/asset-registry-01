import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from '../in-memory-data.service';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatRadioModule,
    HttpClientModule,
    HttpClientXsrfModule,
    HttpClientInMemoryWebApiModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})

export class DashboardModule { }