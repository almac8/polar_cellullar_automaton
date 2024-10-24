import { useContext, useEffect, useRef } from "react";

import "./Canvas.css";
import { EngineDataContext } from "../../Engine/Data";

const Canvas = () => {
  const canvasRef = useRef(null);
  const engineDataContext = useContext(EngineDataContext);

  const initializeCanvas = (canvas: HTMLCanvasElement) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    engineDataContext.setRenderingContext(canvas.getContext("2d") ?? undefined);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if(canvas) initializeCanvas(canvas);
  }, [ canvasRef ]);

  return <canvas id="Canvas" ref={ canvasRef } />;
};

export default Canvas;