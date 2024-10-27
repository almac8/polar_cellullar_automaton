import { useState } from "react";

import "./UI.css";

const UI = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div
      id="UI"
      className={ isOpen ? "open" : "closed" }
      onMouseEnter={ () => setIsOpen(true) }
      onMouseLeave={ () => setIsOpen(false) }>
      {isOpen && <h1>UI</h1>}
    </div>
  )
};

export default UI;