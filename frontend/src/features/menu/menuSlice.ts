import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

// initial state
const initialState = {
    openItem: ['dashboard'],
    openComponent: 'buttons',
    drawerOpen: false,
    componentDrawerOpen: true,
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        activeItem(state, action) {
            state.openItem = action.payload.openItem;
        },

        activeComponent(state, action) {
            state.openComponent = action.payload.openComponent;
        },

        openDrawer(state, action) {
            state.drawerOpen = action.payload.drawerOpen;
        },

        openComponentDrawer(state, action) {
            state.componentDrawerOpen = action.payload.componentDrawerOpen;
        },
    },
});

export const { activeItem, activeComponent, openDrawer, openComponentDrawer } =
    menuSlice.actions;

export default menuSlice.reducer;
export const selectCurrentMenu = (state: RootState) => state.menu;
