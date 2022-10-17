import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './../../app/store';

interface MessageState {
    message: string | null;
    type: 'error' | 'success' | 'info' | 'warning' | null;
}

// create initial state
const initialState = {
    message: null,
    type: null,
} as MessageState;

// create a slice of state for the message feature
export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        // add a new message to the state
        addMessage: (state, { payload }) => {
            state.message = payload.message;
            state.type = payload.type;
        },

        // clear the message from the state
        clearMessage: (state) => {
            state.message = null;
            state.type = null;
        },
    },
});

// export the actions
export const { addMessage, clearMessage } = messageSlice.actions;

// select the message from the state
export const selectMessage = (state: RootState) => state.message;

// export the reducer
export default messageSlice.reducer;
