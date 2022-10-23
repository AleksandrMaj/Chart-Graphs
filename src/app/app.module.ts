import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AddChartButtonComponent } from './components/add-chart-button/add-chart-button.component';
import { ChartPartComponent } from './components/chart-part/chart-part.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    AddChartButtonComponent,
    ChartPartComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
