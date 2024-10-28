import Vector2 from "./Vector2";

class PolarTile {
  private radius: number;
  private startAngle: number;
  private endAngle: number;

  private color: string;

  constructor(radius?: number, startAngle?: number, endAngle?: number) {
    this.radius = radius ?? 0;
    this.startAngle = startAngle ?? 0;
    this.endAngle = endAngle ?? 0;
  
    this.color = `#${Math.floor(Math.random() * 100)}${Math.floor(Math.random() * 100)}${Math.floor(Math.random() * 100)}`;
  }
  
  render(renderingContext: CanvasRenderingContext2D) {
    const origin = new Vector2(renderingContext.canvas.width / 2, renderingContext.canvas.height / 2);

    renderingContext.beginPath();
    renderingContext.strokeStyle = this.color;
    renderingContext.lineWidth = 10;
    renderingContext.arc(origin.x, origin.y, this.radius, this.degreesToRadians(this.startAngle), this.degreesToRadians(this.endAngle));
    renderingContext.stroke();
  }

  private degreesToRadians(degrees: number) {
    return Math.PI / 180 * degrees;
  }
}

export default PolarTile;