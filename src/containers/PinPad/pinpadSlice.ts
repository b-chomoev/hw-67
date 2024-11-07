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
        deleteLastElement: (state) => {
            state.value = state.value.slice(0, -1);
        },
        checkPin: (state) => {
            if (state.value === correctPin) {
                alert('Correct pin');
                state.value = '';
            } else {
                alert('Access denied');
                state.value = '';
            }
        },
    },
});

export const pinpadReducer = pinpadSlice.reducer;
export const {add, deleteLastElement, checkPin} = pinpadSlice.actions;