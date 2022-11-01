import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';

// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = 'http://localhost:3000';

const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

const baseAPI = createApi({
    tagTypes: ['Address', 'User', 'Degree'],
    baseQuery,
    reducerPath: 'API',
    endpoints: (builder) => ({}),
});

export default baseAPI;
