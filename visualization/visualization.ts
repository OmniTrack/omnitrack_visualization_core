import OTChart from './ot_chart'
import HorizontalBarChart from './horizontal_bar.chart';

export class OTChartFactory{
  static readonly TYPE_HORIZONTAL_CATEGORICAL_BAR = "horizontal-bar"

  static makeChart(type:string): OTChart<any>{
    switch(type){
      case this.TYPE_HORIZONTAL_CATEGORICAL_BAR: 
      return new HorizontalBarChart()
    }
  }
}