import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UI from "./components/UI/UI";
import Canvas from "./components/Canvas/Canvas";
import Engine from "./Engine/Engine";
import { EngineDataProvider } from "./Engine/Data";

const engine = new Engine();
engine.start();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EngineDataProvider>
      <Canvas />
      <UI />
    </ EngineDataProvider>
  </StrictMode>
);