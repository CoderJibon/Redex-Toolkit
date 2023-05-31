import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice.js";

const Counter = () => {
  const selector = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{selector.count}</h1>
      <hr />
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(reset(0))}>reset</button>
    </div>
  );
};

export default Counter;
