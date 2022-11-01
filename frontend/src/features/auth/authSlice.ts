import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    avatar: '',
    token: '',
} as User;

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (
            state,
            { payload: { user } }: PayloadAction<{ user: User }>
        ) => {
            state.id = user.id;
            state.firstName = user.firstName;
            state.lastName = user.lastName;
            state.email = user.email;
            state.role = user.role;
            state.avatar = user.avatar;

            if (user.token) {
                state.token = user.token;
                localStorage.setItem('token', user.token);
            }
        },
        logout: (state) => {
            state.id = '';
            state.firstName = '';
            state.lastName = '';
            state.email = '';
            state.role = '';
            state.avatar = '';
            state.token = '';
            localStorage.removeItem('token');
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth;
