import {Chart} from 'chart.js'
import OTChart from './ot_chart'
import HorizontalBarChart from './horizontal_bar.chart';

export class OTChartFactory{
  static readonly TYPE_HORIZONTAL_CATEGORICAL_BAR = "horizontal-bar"

  static overrideOptions?: OTChartDefaultOptions

  static makeChart(type:string): OTChart<any>{
    switch(type){
      case this.TYPE_HORIZONTAL_CATEGORICAL_BAR: 
      return new HorizontalBarChart(OTChartFactory.overrideOptions)
    }
  }

  static setOverrideSettings(options: OTChartDefaultOptions){
    OTChartFactory.overrideOptions = options
    if(options.elementMainColor)
      Chart.defaults.global.elements.rectangle.backgroundColor = options.elementMainColor
  }
}

export interface OTChartDefaultOptions{
  elementMainColor?: string 
}