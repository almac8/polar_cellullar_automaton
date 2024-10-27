import { engineData } from "./Data";
import Scene from "./Scene";

class Engine {
  private isRunning: boolean;
  private lastUpdateTime: number;
  private scene: Scene;

  constructor() {
    this.isRunning = false;
    this.lastUpdateTime = 0;
    this.scene = new Scene();
  }
  
  start() {
    this.isRunning = true;
    this.lastUpdateTime = Date.now();
    this.gameloop();
  }

  private gameloop() {
    const currentTime = Date.now();
    const deltatime = currentTime - this.lastUpdateTime;
    this.lastUpdateTime = currentTime;

    this.update(deltatime);

    if(engineData.renderingContext) this.render(engineData.renderingContext);

    if(this.isRunning) requestAnimationFrame(() => this.gameloop());
  }

  private update(deltatime: number) {
    this.scene.update(deltatime);
  }

  private render(renderingContext: CanvasRenderingContext2D) {
    this.clearCanvas(renderingContext);

    this.scene.render(renderingContext);
  }

  private clearCanvas(renderingContext: CanvasRenderingContext2D) {
    renderingContext.beginPath();
    renderingContext.fillStyle = "black";
    renderingContext.fillRect(0, 0, renderingContext.canvas.width, renderingContext.canvas.height);
    renderingContext.fill();
  }
}

export default Engine;