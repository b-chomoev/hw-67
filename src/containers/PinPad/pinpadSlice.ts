import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        add: (state, action: PayloadAction<string>) => {
            if (state.value.length < 4) {
                state.value += action.payload;
            }
        },
        deleteLastDigit: () => {

        },
        checkPin: () => {

        },
        resetInput: () => {

        },
    },
});

export const pinpadReducer = pinpadSlice.reducer;
export const {add} = pinpadSlice.actions;