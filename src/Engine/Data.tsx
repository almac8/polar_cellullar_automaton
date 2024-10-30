import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type EngineData = {
  renderingContext: CanvasRenderingContext2D | undefined,
  setRenderingContext: Dispatch<SetStateAction<CanvasRenderingContext2D | undefined>>,

  isRunning: boolean,
  setIsRunning: Dispatch<SetStateAction<boolean>>,

  runOnce: boolean,
  setRunOnce: Dispatch<SetStateAction<boolean>>
};

export let engineData: EngineData = {
  renderingContext: undefined,
  setRenderingContext: () => {},

  isRunning: false,
  setIsRunning: () => {},

  runOnce: false,
  setRunOnce: () => {},
};

export const EngineDataContext = createContext(engineData);

type EngineDataProviderProps = { children: ReactNode };

export const EngineDataProvider = (props: EngineDataProviderProps) => {
  const [ renderingContext, setRenderingContext ] = useState<CanvasRenderingContext2D | undefined>(undefined);
  const [ isRunning, setIsRunning ] = useState<boolean>(false);
  const [ runOnce, setRunOnce ] = useState<boolean>(false);

  engineData.renderingContext = renderingContext;
  engineData.setRenderingContext = setRenderingContext;

  engineData.isRunning = isRunning;
  engineData.setIsRunning = setIsRunning;

  engineData.runOnce = runOnce;
  engineData.setRunOnce = setRunOnce;

  return (
    <EngineDataContext.Provider value={{
      renderingContext, setRenderingContext,
      isRunning, setIsRunning,
      runOnce, setRunOnce }}>
      { props.children }
    </EngineDataContext.Provider>
  );
};
