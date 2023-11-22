import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report-list/report-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { MostWantedPageComponent } from './most-wanted-page/most-wanted-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    ReportListComponent,
    HomePageComponent,
    HeaderComponent,
    MapComponent,
    MostWantedPageComponent,
    ReportPageComponent,
    InfoPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
