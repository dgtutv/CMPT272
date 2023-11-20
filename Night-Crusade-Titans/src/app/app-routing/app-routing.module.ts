import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CreateReportComponent } from '../create-report/create-report.component';
import { MostWantedComponent } from '../most-wanted/most-wanted.component';
import { InfoComponent } from '../info/info.component';

const appRoutes:Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'New-Report', component: CreateReportComponent},
  {path: 'Most-Wanted', component: MostWantedComponent},
  {path: 'Info', component: InfoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
