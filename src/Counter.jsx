
import {useState} from "react";
import PropTypes from "prop-types";

const Counter= ({initialCount=0}) => {


    // let count = 0;

    
   const[count, setCount] = useState(initialCount);

   const handleInc = () => {
    setCount(count+1);

   };

   const handleDec = () => {
    setCount(count-1);
   };

    return(
        <div>
            <h2>
                Count
            </h2>
            <h3>{count}</h3>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
    );
};


Counter.PropTypes = {
    initialCount: PropTypes.number
};
export default Counter;