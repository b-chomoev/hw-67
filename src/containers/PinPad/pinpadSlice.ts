import {createSlice} from "@reduxjs/toolkit";

interface PinpadState {
    value: string;
}

const initialState: PinpadState = {
    value: '',
}

const correctPin = '1337';

export const pinpadSlice = createSlice({
    name: 'pinpad',
    initialState,
    reducers: {

    },
});

export const pinpadReducer = pinpadSlice.reducer;