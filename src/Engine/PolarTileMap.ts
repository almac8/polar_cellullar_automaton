import PolarTileRing from "./PolarTileRing";

class PolarTileMap {
  private width: number;
  private numRings: number;

  private rings: Array<PolarTileRing>;

  constructor(width?: number, numRings?: number) {
    this.width = width ?? 0;
    this.numRings = numRings ?? 0;

    this.rings = new Array<PolarTileRing>();

    for(let i = 0; i < this.numRings; i++) {
      this.rings.push(new PolarTileRing(i * this.width, 2 * (i * 3.14159)));
    }
  }

  render(renderingContext: CanvasRenderingContext2D) {
    this.rings.forEach(ring => ring.render(renderingContext));
  }
}

export default PolarTileMap;