export default abstract class OTChart<D>{
  
  protected data: D = null

  constructor()
  {
  }

  setData(data: D){
    this.data = data
    this.onDatasetChanged(data)
  }

  abstract onDatasetChanged(data: D): void

  abstract updateChartToCanvas(canvasContext: string | CanvasRenderingContext2D | HTMLCanvasElement | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>)
}