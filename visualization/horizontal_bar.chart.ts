import OTChart from './ot_chart'
import Chart from 'chart.js'
import IBarChartDataType from './datatypes/barchart.datatype'
export default class HorizontalBarChart extends OTChart<IBarChartDataType>{

  onDatasetChanged(data: IBarChartDataType): void {
    
  }

  updateChartToCanvas(canvasContext: string | CanvasRenderingContext2D | HTMLCanvasElement | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>) {
    const chart = new Chart(canvasContext, {
      type: "bar",
      data: {
        labels: this.data.data.map(d=>d.label),
        datasets: [{data: this.data.data.map(d=>d.value)}]
      }
    })
  }
  
}