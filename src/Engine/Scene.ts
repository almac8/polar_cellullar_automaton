import PolarTileMap from "./PolarTileMap";

class Scene {
  private tilemap: PolarTileMap;

  constructor() {
    this.tilemap = new PolarTileMap(8, 32);
  }
  
  update(deltatime: number) {
    this.tilemap = new PolarTileMap(8, 32);
  }
  
  render(renderingContext: CanvasRenderingContext2D) {
    this.tilemap.render(renderingContext);
  }
}

export default Scene;