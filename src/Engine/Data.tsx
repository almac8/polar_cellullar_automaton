import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type EngineData = {
  renderingContext: CanvasRenderingContext2D | undefined,
  setRenderingContext: Dispatch<SetStateAction<CanvasRenderingContext2D | undefined>>
};

export let engineData: EngineData = {
  renderingContext: undefined,
  setRenderingContext: () => {}
};

export const EngineDataContext = createContext(engineData);

type EngineDataProviderProps = { children: ReactNode };

export const EngineDataProvider = (props: EngineDataProviderProps) => {
  const [ renderingContext, setRenderingContext ] = useState<CanvasRenderingContext2D | undefined>(undefined);

  engineData.renderingContext = renderingContext;
  engineData.setRenderingContext = setRenderingContext;

  return (
    <EngineDataContext.Provider value={{ renderingContext, setRenderingContext }}>
      { props.children }
    </EngineDataContext.Provider>
  );
};
