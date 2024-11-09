import PolarTileRing from "./PolarTileRing";
import VectorP from "./VectorP";

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

  getTileValue(tileIndex: VectorP) {
    return this.rings[tileIndex.radius].getTileValue(tileIndex.theta);
  }

  setTileValue(tileIndex: VectorP, value: number) {
    this.rings[tileIndex.radius].setTileValue(tileIndex.theta, value);
  }
  
  getTileBufferValue(tileIndex: VectorP) {
    return this.rings[tileIndex.radius].getTileBufferValue(tileIndex.theta);
  }

  setTileBufferValue(tileIndex: VectorP, value: number) {
    this.rings[tileIndex.radius].setTileBufferValue(tileIndex.theta, value);
  }

  getNumTilesInRing(ringIndex: number) {
    return this.rings[ringIndex].numTiles;
  }

  getRetrogradeCell(cellIndex: VectorP) {
    const newCellIndex = new VectorP();

    newCellIndex.radius = cellIndex.radius;
    newCellIndex.theta = cellIndex.theta === 0 ? this.getNumTilesInRing(cellIndex.radius) - 1 : cellIndex.theta - 1;

    return newCellIndex;
  }

  getUprankCell(cellIndex: VectorP) {
    const nextRank = cellIndex.radius === this.numRings - 1 ? 0 : cellIndex.radius + 1;
    
    cellIndex.theta = Math.round(cellIndex.theta / this.getNumTilesInRing(cellIndex.radius) * this.getNumTilesInRing(nextRank));
    cellIndex.radius = nextRank;

    return cellIndex;
  }

  getDownRankCell(cellIndex: VectorP) {
    const nextRank = cellIndex.radius - 1 < 0 ? this.numRings - 1 : cellIndex.radius - 1;

    let theta = Math.round(cellIndex.theta / this.getNumTilesInRing(cellIndex.radius) * this.getNumTilesInRing(nextRank));
    if(theta === this.getNumTilesInRing(nextRank)) theta--;

    cellIndex.radius = nextRank;
    cellIndex.theta = theta;

    return cellIndex;
  }
}

export default PolarTileMap;