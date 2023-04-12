import React, { useState } from "react";


function StateExample() {
    const [counter, setCounter] = useState(0)
    return (
        <>
          <h1>{counter}</h1> 
            <p>
                <button onClick={() => setCounter(counter + 1)}>
                    +
                </button>
            </p>

            <p>
                <button onClick={() => setCounter(counter - 1)}>
                    -
                </button>
            </p>
        </>
    )

}


export default StateExample;