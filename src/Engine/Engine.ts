import { engineData } from "./Data";

class Engine {
  private isRunning: boolean;
  private lastUpdateTime: number;

  constructor() {
    this.isRunning = false;
    this.lastUpdateTime = 0;
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
    console.log(`Update ${ deltatime }`);
  }

  private render(renderingContext: CanvasRenderingContext2D) {
    renderingContext.beginPath();
    renderingContext.fillStyle = "black";
    renderingContext.fillRect(0, 0, renderingContext.canvas.width, renderingContext.canvas.height);
    
    renderingContext.fillStyle = "lime";
    renderingContext.arc(renderingContext.canvas.width / 2, renderingContext.canvas.height / 2, 50, 0, 2 * Math.PI);
    renderingContext.fill();
  }
}

export default Engine;