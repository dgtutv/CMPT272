import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportListComponent } from './report-list/report-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { MostWantedPageComponent } from './most-wanted-page/most-wanted-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './report/report.component';
import { PhoneNumberPipe } from './phone-number.pipe';
import { EditReportComponent } from './edit-report/edit-report.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
    HomePageComponent,
    HeaderComponent,
    MapComponent,
    MostWantedPageComponent,
    ReportPageComponent,
    InfoPageComponent,
    ReportComponent,
    PhoneNumberPipe,
    EditReportComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
