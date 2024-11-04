import { engineData } from "./Data";
import PolarTileMap from "./PolarTileMap";
import VectorP from "./VectorP";

class Scene {
  private tilemap: PolarTileMap;

  constructor() {
    this.tilemap = new PolarTileMap(8, 32);

    this.tilemap.setTileValue(new VectorP(10, 10), 1);
  }
  
  update(deltatime: number) {
    if(engineData.isRunning || engineData.runOnce) {

      for(let ringIndex = 0; ringIndex < this.tilemap.numRings; ringIndex++) {
        for(let tileIndex = 0; tileIndex < this.tilemap.getNumTilesInRing(ringIndex); tileIndex++) {
          const currentTileIndex = new VectorP(ringIndex, tileIndex);

          if(this.tilemap.getTileValue(currentTileIndex) > 0) this.updateTile(currentTileIndex);
        }
      }

      engineData.setRunOnce(false);
    }
  }
  
  render(renderingContext: CanvasRenderingContext2D) {
    this.tilemap.render(renderingContext);
  }

  updateTile(tileIndex: VectorP) {
    const tileValue = this.tilemap.getTileValue(tileIndex);

    const nextTileIndex = this.tilemap.getRetrogradeCell(tileIndex);
    const nextTileValue = this.tilemap.getTileValue(nextTileIndex);

    this.tilemap.setTileValue(tileIndex, 0);
    this.tilemap.setTileValue(nextTileIndex, tileValue + nextTileValue);
  }
}

export default Scene;