// create address slice

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface AddressState {
    present: Address | null;
    permanent: Address | null;
}

const initialState = {
    present: null,
    permanent: null,
} as AddressState;

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setAddress: (
            state,
            { payload: { address } }: PayloadAction<{ address: Address }>
        ) => {
            if (address.type === 'PRESENT') {
                state.present = address;
            } else {
                state.permanent = address;
            }
        },
    },
});

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
export const selectCurrentAddress = (state: RootState) => state.address;
