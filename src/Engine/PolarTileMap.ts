import PolarTileRing from "./PolarTileRing";
import Vector2 from "./Vector2";

class PolarTileMap {
  private ringWidth: number;
  readonly numRings: number;

  private rings: Array<PolarTileRing>;

  constructor(ringWidth?: number, numRings?: number) {
    this.ringWidth = ringWidth ?? 0;
    this.numRings = numRings ?? 0;

    this.rings = new Array<PolarTileRing>();

    for(let i = 1; i <= this.numRings; i++) {
      this.rings.push(new PolarTileRing(i * this.ringWidth, this.ringWidth, Math.round(2 * i * Math.PI)));
    }
  }

  render(renderingContext: CanvasRenderingContext2D) {
    this.rings.forEach(ring => ring.render(renderingContext));
  }

  setTileActive(tileIndex: Vector2, isActive: boolean) {
    this.rings[tileIndex.x].setTileActive(tileIndex.y, isActive);
  }

  getNumTilesInRing(ringIndex: number) {
    return this.rings[ringIndex].numTiles;
  }
}

export default PolarTileMap;