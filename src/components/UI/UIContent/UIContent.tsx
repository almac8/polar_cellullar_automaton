import { Dispatch, SetStateAction } from "react";
import EngineControls from "./EngineControls/EngineControls";
import "./UIContent.css";

type UIContentProps = {
  isLocked: boolean,
  setIsLocked: Dispatch<SetStateAction<boolean>>
}

const UIContent = (props: UIContentProps) => (
  <div id="UIContent">
    <EngineControls />
    <button onClick={ () => props.setIsLocked(!props.isLocked) }>{ props.isLocked ? "Unlock" : "Lock"}</button>
  </div>
);

export default UIContent;