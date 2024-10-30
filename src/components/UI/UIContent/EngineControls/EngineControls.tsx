import { useContext } from "react";
import { EngineDataContext } from "../../../../Engine/Data";
import "./EngineControls.css";

const EngineControls = () => {
  const engineDataContext = useContext(EngineDataContext);

  return (
    <div id="EngineControls">
      <button onClick={ () => engineDataContext.setIsRunning(!engineDataContext.isRunning) }>{ engineDataContext.isRunning ? "Pause" : "Run" }</button>
      { !engineDataContext.isRunning && <button onClick={ () => engineDataContext.setRunOnce(true) }>Run Once</button> }
    </div>
  )
};

export default EngineControls;