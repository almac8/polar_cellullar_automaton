import PolarTile from "./PolarTile";

class PolarTileRing {
  private radius: number;
  private numTiles: number;

  private spanAngle: number;

  private tiles: Array<PolarTile>;

  constructor(radius?: number, numTiles?: number) {
    this.radius = radius ?? 0;
    this.numTiles = numTiles ?? 0;

    this.spanAngle = 360 / this.numTiles;
    
    this.tiles = new Array<PolarTile>();
    for(let i = 0; i < this.numTiles; i++) {
      const startAngle = i * this.spanAngle;
      this.tiles.push(new PolarTile(this.radius, startAngle, startAngle + this.spanAngle));
    }
  }

  render(renderingContext: CanvasRenderingContext2D) {
    this.tiles.forEach(tile => tile.render(renderingContext));
  }
}

export default PolarTileRing;