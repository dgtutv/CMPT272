import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ReportPageComponent } from '../report-page/report-page.component';
import { MostWantedPageComponent } from '../most-wanted-page/most-wanted-page.component';
import { InfoPageComponent } from '../info-page/info-page.component';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes:Routes = [
  {path: 'home/', component: HomePageComponent},
  {path: 'report/', component: ReportPageComponent},
  {path: 'most-wanted/', component: MostWantedPageComponent},
  {path: 'info/', component: InfoPageComponent},
  {path: "", redirectTo: "home/", pathMatch: "full"}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }