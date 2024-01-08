import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
    {
        name: "counter",
        initialState: {
            counterValue: 0,
        },
        reducers: {
            increment: (state) => {
                state.counterValue++;
            },
            decrement: (state) => {
                state.counterValue--;
            },
        },
    },
);

export const counterActions = counterSlice.actions;

export default counterSlice;