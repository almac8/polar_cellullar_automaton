import Vector2 from "./Vector2";
import VectorP from "./VectorP";

class PolarTile {
  private radius: number;
  private width: number;
  private startAngle: number;
  private endAngle: number;

  private activeColor: string;
  private inactiveColor: string;
  private isActive: boolean;
  private density: number;

  constructor(radius?: number, width?: number, startAngle?: number, endAngle?: number) {
    this.radius = radius ?? 0;
    this.width = width ?? 0;
    this.startAngle = startAngle ?? 0;
    this.endAngle = endAngle ?? 0;
  
    this.activeColor = "#00FF00FF";
    this.inactiveColor = "#22222244";
    this.isActive = false;
    this.density = 1;
  }
  
  render(renderingContext: CanvasRenderingContext2D) {
    if(this.isActive) {
      const origin = new Vector2(renderingContext.canvas.width / 2, renderingContext.canvas.height / 2);
      
      for(let i = 0; i < this.density; i++) {
        const randomRadius = Math.random() * ((this.radius + this.width / 2) - (this.radius - this.width / 2)) + (this.radius - this.width / 2);
        const randomTheta = (Math.random() * this.degreesToRadians(this.endAngle - this.startAngle)) + this.degreesToRadians(this.startAngle);
        
        const pointP = new VectorP(randomRadius, randomTheta);
        const pointV = this.polarToCartesian(pointP).add(origin);
        
        renderingContext.beginPath();
        renderingContext.fillStyle = this.activeColor;
        renderingContext.fillRect(pointV.x, pointV.y, 1, 1);
      }
    } else {
      const origin = new Vector2(renderingContext.canvas.width / 2, renderingContext.canvas.height / 2);

      renderingContext.beginPath();
      renderingContext.strokeStyle = this.isActive ? this.activeColor : this.inactiveColor;
      renderingContext.lineWidth = this.width;
      renderingContext.arc(origin.x, origin.y, this.radius, this.degreesToRadians(this.startAngle), this.degreesToRadians(this.endAngle));
      renderingContext.stroke();
    }
  }

  private degreesToRadians(degrees: number) {
    return Math.PI / 180 * degrees;
  }

  private polarToCartesian(vector: VectorP) {
    return new Vector2(
      vector.radius * Math.cos(vector.theta),
      vector.radius * Math.sin(vector.theta)
    );
  }

  setActive(isActive: boolean) {
    this.isActive = isActive;
  }
}

export default PolarTile;