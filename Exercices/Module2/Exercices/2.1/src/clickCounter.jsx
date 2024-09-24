/* eslint-disable react/prop-types */
import { useState } from "react";

function ClickCounter ({
    title,
    on10Clicks = "Master",
    onMouseOver = "Please click me"
}) {

    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="card">
          <h4>{title}</h4>
          {isHovered ? <p>{onMouseOver}</p> : null}
          <button
            onClick={() => {
              const newCount = count + 1;
              setCount(newCount);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            count is {count}
          </button>
          {count >= 10 ? <p>{on10Clicks}</p> : null}
        </div>
      );
    
}

export default ClickCounter;