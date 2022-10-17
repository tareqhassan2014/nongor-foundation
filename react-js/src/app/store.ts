import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import messageSlice from '../features/message/messageSlice';
import baseAPI from './baseAPI';

import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import addressSlice from '../features/address/addressSlice';
import contactSlice from '../features/contact/contactSlice';
import degreeSlice from '../features/degree/degreeSlice';

const rootReducer = combineReducers({
    message: messageSlice,
    auth: authSlice,
    degree: degreeSlice,
    address: addressSlice,
    contact: contactSlice,
    [baseAPI.reducerPath]: baseAPI.reducer,
});

const persistConfig = {
    key: 'nongor-foundation',
    version: 1,
    storage,
    whitelist: ['user', 'address', 'auth', 'degree', 'contact'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(baseAPI.middleware),
});

export const persistor = persistStore(store);

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(baseAPI.middleware),
// });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
