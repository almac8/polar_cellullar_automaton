import PolarTile from "./PolarTile";

class PolarTileRing {
  private radius: number;
  private width: number;
  readonly numTiles: number;

  private spanAngle: number;

  private tiles: Array<PolarTile>;

  constructor(radius?: number, width?: number, numTiles?: number) {
    this.radius = radius ?? 0;
    this.width = width ?? 0;
    this.numTiles = numTiles ?? 0;

    this.spanAngle = 360 / this.numTiles;
    
    this.tiles = new Array<PolarTile>();
    for(let i = 0; i < this.numTiles; i++) {
      const startAngle = i * this.spanAngle;

      this.tiles.push(new PolarTile(this.radius, this.width, startAngle, startAngle + this.spanAngle));
    }
  }

  render(renderingContext: CanvasRenderingContext2D) {
    this.tiles.forEach(tile => tile.render(renderingContext));
  }

  getTileValue(tileIndex: number) {
    return this.tiles[tileIndex].value;
  }

  setTileValue(tileIndex: number, value: number) {
    this.tiles[tileIndex].value = value;
  }

  getTileBufferValue(tileIndex: number) {
    return this.tiles[tileIndex].bufferValue;
  }
  
  setTileBufferValue(tileIndex: number, value: number) {
    this.tiles[tileIndex].bufferValue = value;
  }
}

export default PolarTileRing;