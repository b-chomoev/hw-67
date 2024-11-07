import {configureStore} from "@reduxjs/toolkit";
import {pinpadReducer} from "../containers/PinPad/pinpadSlice.ts";

export const store = configureStore({
    reducer: {
        counter: pinpadReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;