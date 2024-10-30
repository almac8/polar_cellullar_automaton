import { useState } from "react";

import "./UI.css";
import UIContent from "./UIContent/UIContent";

const UI = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isLocked, setIsLocked ] = useState(false);

  return (
    <div
      id="UI"
      className={ isOpen ? "open" : "closed" }
      onMouseEnter={ () => !isLocked && setIsOpen(true) }
      onMouseLeave={ () => !isLocked && setIsOpen(false) }>
      { isOpen && <UIContent isLocked={ isLocked } setIsLocked={ setIsLocked } /> }
    </div>
  )
};

export default UI;