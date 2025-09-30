import { useReducer } from "react";
import "./ReducerDemo.css";

function reducer(currState, action) {
  //here currState defines useReducer's state, action defines argument which we pass on dispatcher()
  switch (action) {
    case "Increment":
      return { count: currState.count + 1 };
    case "Decrement":
      return { count: currState.count - 1 };
    default:
      return currState;
  }
}

function Demo() {
  const [state, dispatcher] = useReducer(reducer, { count: 0 }); //always set default value as object

  //Here whenever we call dispatcher function it silently calls reducer() its useReducer nature behavior,
  function handelDecrement() {
    dispatcher("Decrement");
  }

  function handelIncrement() {
    dispatcher("Increment");
  }

  return (
    <div className="container">
      <button onClick={handelIncrement}>+</button>
      <span>{state.count}</span>
      <button onClick={handelDecrement}>-</button>
    </div>
  );
}

export default Demo;
