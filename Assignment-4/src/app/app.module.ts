import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';

@NgModule({
    declarations: [
        AppComponent,
        ReportComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
});
export class AppModule {}       /*Somethings fucked, erase it all and try again*/