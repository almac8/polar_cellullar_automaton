import { engineData } from "./Data";
import PolarTileMap from "./PolarTileMap";
import VectorP from "./VectorP";

class Scene {
  private tilemap: PolarTileMap;
  private activeCells: Array<VectorP>;

  constructor() {
    this.tilemap = new PolarTileMap(8, 32);
    this.activeCells = new Array<VectorP>();
    
    this.activeCells.push(new VectorP(10, 10));

    this.activeCells.forEach(cell => this.tilemap.setTileValue(cell, 50));
  }
  
  update(deltatime: number) {
    if(engineData.isRunning || engineData.runOnce) {

      engineData.setRunOnce(false);
    }
  }
  
  render(renderingContext: CanvasRenderingContext2D) {
    this.tilemap.render(renderingContext);
  }
}

export default Scene;