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
        addDigit: () => {

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
const { addDigit, deleteLastDigit, checkPin, resetInput } = pinpadSlice.actions;