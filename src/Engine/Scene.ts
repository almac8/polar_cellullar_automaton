import PolarTileMap from "./PolarTileMap";
import Vector2 from "./Vector2";

class Scene {
  private tilemap: PolarTileMap;
  private activeTile: Vector2;

  constructor() {
    this.tilemap = new PolarTileMap(8, 32);
    this.activeTile = new Vector2(16, 0);
  }
  
  update(deltatime: number) {
    this.tilemap.setTileActive(this.activeTile, false);
    this.activeTile.y++;
    if(this.activeTile.y >= this.tilemap.getNumTilesInRing(this.activeTile.x)) this.activeTile.y = 0;
    
    this.tilemap.setTileActive(this.activeTile, true);
  }
  
  render(renderingContext: CanvasRenderingContext2D) {
    this.tilemap.render(renderingContext);
  }
}

export default Scene;