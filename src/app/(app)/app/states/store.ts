import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import useReducer from "./user/slice";

export const store = configureStore({
    reducer: { counterReducer, useReducer }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // for async actions