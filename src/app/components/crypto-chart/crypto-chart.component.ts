import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {EChartsOption} from "echarts";
import * as echarts from 'echarts';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.css']
})
export class CryptoChartComponent implements OnChanges
{
  @Input() cryptoData: Object = {};
  @Input() cryptoShortcut: string = "";

  // @ts-ignore
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: [1, 2, 3, 4, 5],
      axisLabel: undefined,
      show: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      show: false
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '0%'
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: undefined,
      borderWidth: 0,
      shadowColor: undefined,
      shadowBlur: undefined,
      axisPointer: {
        type: 'shadow',
        lineStyle: {
          color: '#E8E6E3'
        },
        crossStyle: {
          color: '#E8E6E3'
        },
      },
      formatter: params =>
      {
        // @ts-ignore
        return params[0].name + "<br>" + params[0].data.toLocaleString('en-US', {maximumFractionDigits: 10}) + '$'
      },
      textStyle: {
        color: '#B2ACA2',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        textShadowBlur: 5
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    toolbox: {
      feature: {
        dataZoom: {
          show: true,
          iconStyle: {
            borderColor: '#B2ACA2',
            borderWidth: 2
          }
        }
      }
    },
    series: [{
      data: [1, 2, 3, 4, 5],
      type: 'line',
      color: 'rgba(255,255,255)',
      lineStyle: {
        width: 1.5
      },
      areaStyle: {
        color: 'rgba(255,255,255)'
      },
      animation: false
    },
    ]
  }

  constructor()
  {
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    var a = document.getElementById('chart-' + this.cryptoShortcut);
    if(a == null) return;

    // @ts-ignore
    var b = echarts.getInstanceByDom(a);

    // @ts-ignore
    this.cryptoData = changes['cryptoData']['currentValue'];
    // @ts-ignore
    this.chartOption.xAxis.data = Object.keys(this.cryptoData).reverse().map(value => new Date(value).toLocaleDateString())
    // @ts-ignore
    this.chartOption.series[0].data = Object.values(this.cryptoData).reverse();

    b?.setOption({
        xAxis: {
          data: Object.keys(this.cryptoData).reverse().map(value => new Date(value).toLocaleDateString())
        },
        series: [{
          data: Object.values(this.cryptoData).reverse(),
          // @ts-ignore
          color: this.chartOption.series[0].data[0] < this.chartOption.series[0].data.slice(-1) ? 'rgba(38,224,55,0.7)' : 'rgba(163,0,0,0.7)',
          areaStyle: {
            // @ts-ignore
            color: this.chartOption.series[0].data[0] < this.chartOption.series[0].data.slice(-1) ? 'rgba(23,162,3,0.2)' : 'rgba(163,0,0,0.2)',
          }
        }]
      }
    )
  }
}


//https://echarts.apache.org/handbook/en/concepts/axis
//https://echarts.apache.org/en/option.html#xAxis.axisLine
