class Scene {
  update(deltatime: number) {}
  
  render(renderingContext: CanvasRenderingContext2D) {
    renderingContext.fillStyle = "lime";
    renderingContext.arc(renderingContext.canvas.width / 2, renderingContext.canvas.height / 2, 50, 0, 2 * Math.PI);
    renderingContext.fill();
  }
}

export default Scene;