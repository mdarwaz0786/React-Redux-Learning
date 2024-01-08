import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './counterSlice.js';


const CounterApp = () => {
    const { counterValue } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Counter App Using Redux Toolkit</h4>
            <p>Counter: {counterValue}</p>
            <button onClick={() => dispatch(counterActions.increment())}>Increment</button>
            <button onClick={() => dispatch(counterActions.decrement())}>Decrement</button>
        </div>
    );
};

export default CounterApp;
