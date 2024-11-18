import { engineData } from "./Data";
import PolarTileMap from "./PolarTileMap";
import VectorP from "./VectorP";

class Scene {
  private tilemap: PolarTileMap;
  private numSeeds: number;

  constructor() {
    this.tilemap = new PolarTileMap(8, 32);
    this.numSeeds = 16;

    for(let i = 0; i < this.numSeeds; i++) {
      const randomRadius = Math.floor(Math.random() * this.tilemap.numRings);
      const randomTheta = Math.floor(Math.random() * this.tilemap.getNumTilesInRing(randomRadius));
      const randomValue = Math.floor(Math.random() * 10) * 10;
      
      this.tilemap.setTileValue(new VectorP(randomRadius, randomTheta), randomValue);
    }
  }
  
  update(deltatime: number) {
    if(engineData.isRunning || engineData.runOnce) {

      for(let radius = 0; radius < this.tilemap.numRings; radius++) {
        for(let theta = 0; theta < this.tilemap.getNumTilesInRing(radius); theta++) {
          const currentIndex = new VectorP(radius, theta);
          const tileValue = this.tilemap.getTileValue(currentIndex);

          if(tileValue !== 0) {
            const nextIndex = this.tilemap.getProgradeCell(currentIndex);
            
            this.tilemap.setTileBufferValue(nextIndex, tileValue);
            this.tilemap.setTileValue(currentIndex, 0);
          }
        }
      }

      for(let radius = 0; radius < this.tilemap.numRings; radius++) {
        for(let theta = 0; theta < this.tilemap.getNumTilesInRing(radius); theta++) {
          const currentIndex = new VectorP(radius, theta);
          const tileBufferValue = this.tilemap.getTileBufferValue(currentIndex);

          if(tileBufferValue !== 0) {
            this.tilemap.setTileValue(currentIndex, tileBufferValue);
            this.tilemap.setTileBufferValue(currentIndex, 0);
          }
        }
      }

      engineData.setRunOnce(false);
    }
  }
  
  render(renderingContext: CanvasRenderingContext2D) {
    this.tilemap.render(renderingContext);
  }
}

export default Scene;