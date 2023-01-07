import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CryptoChartComponent} from "../crypto-chart/crypto-chart.component";

@Component({
  selector: 'app-chart-part',
  templateUrl: './chart-part.component.html',
  styleUrls: ['./chart-part.component.css']
})
export class ChartPartComponent implements OnInit
{
  @Output() removeCrypto = new EventEmitter<string>();
  @Input() cryptoShortcut: string = '';
  name: string = "ERROR";
  rate: number = -1;
  currentValue: number = -1;
  dailyData: Object = {};
  weeklyData: Object = {};
  monthlyData: Object = {};
  chartData = this.dailyData;

  static timeArr: string[] = ['Daily', 'Weekly', 'Monthly'];

  constructor(private http: HttpClient)
  {
  }

  ngOnInit(): void
  {
    this.getData();
  }

  remove(): void {
    this.removeCrypto.emit(this.cryptoShortcut)
  }

  // @ts-ignore
  async getData(): void
  {
    let url;
    for (const time of ChartPartComponent.timeArr)
    {
      {
        url = 'http://localhost:3080/USD/' + this.cryptoShortcut + '/' + time;
        //Fetch long-term data
        this.http.get(url).subscribe(data =>
          {
            switch (time)
            {
              case 'Daily':
              {
                this.dailyData = data;
                this.chartData = this.dailyData
                break;
              }
              case 'Weekly':
              {
                this.weeklyData = data;
                break;
              }
              case 'Monthly':
              {
                this.monthlyData = data;
                break;
              }
            }
          }
        )
      }

      url = 'http://localhost:3080/cryptoMetaData/' + this.cryptoShortcut;

      //Fetch meta data
      this.http.get(url).subscribe(data =>
      {
        for (let [key, value] of Object.entries(data))
        {
          // @ts-ignore
          this.name = data["name"];
          // @ts-ignore
          this.rate = data["rate"];
          // @ts-ignore
          this.currentValue = data["currentValue"];
        }
      })
    }
  }

  updateChart(timeType: string):void {
    switch (timeType)
    {
      case 'daily':
      {
        this.chartData = this.dailyData
        break;
      }
      case 'weekly':
      {
        this.chartData = this.weeklyData
        break;
      }
      case 'monthly':
      {
        this.chartData = this.monthlyData
        break;
      }
    }
  }
}
