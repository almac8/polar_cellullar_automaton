import { engineData } from "./Data";
import PolarTileMap from "./PolarTileMap";
import VectorP from "./VectorP";

class Scene {
  private tilemap: PolarTileMap;
  private activeCells: Array<VectorP>;

  constructor() {
    this.tilemap = new PolarTileMap(8, 32);
    this.activeCells = new Array<VectorP>();

    for(let i = 0; i < this.tilemap.getNumTilesInRing(this.tilemap.numRings - 1); i++) {
      this.activeCells.push(new VectorP(this.tilemap.numRings - 1, i));
    }

    this.activeCells.forEach(cell => this.tilemap.setTileActive(cell, true));
  }
  
  update(deltatime: number) {
    if(engineData.isRunning || engineData.runOnce) {
      this.activeCells.forEach(cell => {
        this.tilemap.setTileActive(cell, false);
        cell = this.tilemap.getDownRankCell(cell);
        this.tilemap.setTileActive(cell, true);
      });

      engineData.setRunOnce(false);
    }
  }
  
  render(renderingContext: CanvasRenderingContext2D) {
    this.tilemap.render(renderingContext);
  }
}

export default Scene;