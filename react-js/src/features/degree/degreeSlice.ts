import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface DegreeState {
    degree: Degree[];
}

const initialState = {
    degree: [],
} as DegreeState;

export const degreeSlice = createSlice({
    name: 'degree',
    initialState,
    reducers: {
        setDegree: (
            state,
            { payload: { degree } }: PayloadAction<{ degree: Degree }>
        ) => {
            const index = state.degree.findIndex((d) => d.id === degree.id);
            if (index === -1) {
                state.degree?.push(degree);
            }
        },

        updateDegree: (
            state,
            { payload: { degree } }: PayloadAction<{ degree: Degree }>
        ) => {
            const index = state.degree.findIndex((d) => d.id === degree.id);
            console.log(index);

            if (index !== -1) {
                state.degree[index] = degree;
            }
        },

        deleteDegree: (
            state,
            { payload: { degree } }: PayloadAction<{ degree: Degree }>
        ) => {
            const index = state.degree.findIndex((d) => d.id === degree.id);
            if (index !== -1) {
                state.degree.splice(index, 1);
            }
        },
    },
});

export const { setDegree, updateDegree, deleteDegree } = degreeSlice.actions;

export default degreeSlice.reducer;
export const selectCurrentDegree = (state: RootState) => state.degree;
