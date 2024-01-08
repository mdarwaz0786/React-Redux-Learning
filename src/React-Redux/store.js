import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  else if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  else {
    return state;
  };
};

const store = createStore(counterReducer);

export default store;