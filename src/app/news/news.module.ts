import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NationalComponent } from './national/national.component';
import { GlobalComponent } from './global/global.component';
import { SportsComponent } from './sports/sports.component';
import { ScienceComponent } from './science/science.component';


@NgModule({
  declarations: [
    NationalComponent,
    GlobalComponent,
    SportsComponent,
    ScienceComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
