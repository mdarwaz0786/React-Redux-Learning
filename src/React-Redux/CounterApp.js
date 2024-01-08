import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterApp = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Counter App Using React Redux</h4>
            <p>Counter: {counter}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </div>
    );
};

export default CounterApp;
