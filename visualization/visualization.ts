import OTChart from './ot_chart'
import HorizontalBarChart from './horizontal_bar.chart';

export default class OTChartFactory{
  readonly TYPE_HORIZONTAL_CATEGORICAL_BAR = "horizontal-bar"
  makeChart(type:string): OTChart<any>{
    switch(type){
      case this.TYPE_HORIZONTAL_CATEGORICAL_BAR: 
      return new HorizontalBarChart()
    }
  }
}

console.log(OTChartFactory)