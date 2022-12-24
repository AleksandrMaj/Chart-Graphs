import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AddChartButtonComponent } from './components/add-chart-button/add-chart-button.component';
import { ChartPartComponent } from './components/chart-part/chart-part.component';
import { AddChartPopupComponent } from './components/add-chart-popup/add-chart-popup.component';
import { SingleCryptoFieldComponent } from './components/single-crypto-field/single-crypto-field.component';
import {NgxEchartsModule} from "ngx-echarts";
import { CryptoChartComponent } from './components/crypto-chart/crypto-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    AddChartButtonComponent,
    ChartPartComponent,
    AddChartPopupComponent,
    SingleCryptoFieldComponent,
    CryptoChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://www.npmjs.com/package/ngx-echarts
