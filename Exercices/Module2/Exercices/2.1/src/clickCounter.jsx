/* eslint-disable react/prop-types */
import { useState } from "react";

function ClickCounter ({
    title,
    on10Clicks = "Master",
}) {

    const [count, setCount] = useState(0);

    return (
        <div className="card">
          <h4>{title}</h4>
          <button
            onClick={() => {
              const newCount = count + 1;
              setCount(newCount);
            }}
          >
            count is {count}
          </button>
          {count >= 10 ? <p>{on10Clicks}</p> : null}
        </div>
      );
    
}

export default ClickCounter;