import { engineData } from "./Data";
import PolarTileMap from "./PolarTileMap";
import VectorP from "./VectorP";

class Scene {
  private tilemap: PolarTileMap;
  private cells: Array<VectorP>;

  constructor() {
    this.tilemap = new PolarTileMap(8, 32);
    this.cells = new Array<VectorP>();

    this.cells.push(new VectorP(0, 0));
    this.cells.push(new VectorP(0, 1));
    this.cells.push(new VectorP(0, 2));
    this.cells.push(new VectorP(0, 3));
    this.cells.push(new VectorP(0, 4));
    this.cells.push(new VectorP(0, 5));

    this.cells.forEach(cell => {
      this.tilemap.setTileActive(cell, true);
    });
  }
  
  update(deltatime: number) {
    if(engineData.isRunning || engineData.runOnce) {
      this.cells.forEach(cell => {
        this.tilemap.setTileActive(cell, false);
        
        cell = this.tilemap.getUprankCell(cell);
        
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