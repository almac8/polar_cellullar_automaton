import Vector2 from "./Vector2";

class PolarTile {
  private radius: number;
  private width: number;
  private startAngle: number;
  private endAngle: number;

  private color: string;
  private isActive: boolean;

  constructor(radius?: number, width?: number, startAngle?: number, endAngle?: number) {
    this.radius = radius ?? 0;
    this.width = width ?? 0;
    this.startAngle = startAngle ?? 0;
    this.endAngle = endAngle ?? 0;
  
    this.color = "#22222244";
    this.isActive = false;
  }
  
  render(renderingContext: CanvasRenderingContext2D) {
    const origin = new Vector2(renderingContext.canvas.width / 2, renderingContext.canvas.height / 2);

    renderingContext.beginPath();
    renderingContext.strokeStyle = this.color;
    renderingContext.lineWidth = this.width;
    renderingContext.arc(origin.x, origin.y, this.radius, this.degreesToRadians(this.startAngle), this.degreesToRadians(this.endAngle));
    renderingContext.stroke();
  }

  private degreesToRadians(degrees: number) {
    return Math.PI / 180 * degrees;
  }

  setActive(isActive: boolean) {
    this.isActive = isActive;

    if(this.isActive) {
      this.color = "#00FF00FF";
    } else {
      this.color = "#22222244";
    }
  }
}

export default PolarTile;