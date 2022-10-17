import baseAPI from '../../app/baseAPI';
import { setAddress } from '../address/addressSlice';
import { setContact } from '../contact/contactSlice';
import { setDegree } from '../degree/degreeSlice';
import { addMessage } from '../message/messageSlice';
import { logout, setUser } from './authSlice';

export const authAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<User, LoginRequest>({
            query: (credentials) => ({
                url: '/api/auth/login',
                method: 'POST',
                body: credentials,
            }),

            async onQueryStarted(query, { queryFulfilled, dispatch }) {
                try {
                    const { data: user } = await queryFulfilled;
                    // set token to local storage
                    localStorage.setItem('token', user.token);

                    dispatch(setUser({ user }));

                    dispatch(
                        addMessage({
                            message: 'Login successful',
                            type: 'success',
                        })
                    );

                    window.history.back();
                    // back to previous
                    setTimeout(() => {
                        dispatch(
                            addMessage({
                                message: null,
                                type: null,
                            })
                        );
                    }, 5000);
                } catch (error: any) {
                    dispatch(
                        addMessage({
                            message:
                                error?.error?.data?.message ||
                                error.message ||
                                'Login failed',
                            type: 'error',
                        })
                    );

                    // back to previous
                    setTimeout(() => {
                        dispatch(
                            addMessage({
                                message: null,
                                type: null,
                            })
                        );
                    }, 5000);
                }
            },

            transformResponse(baseQueryReturnValue: AuthResponse, meta, arg) {
                return baseQueryReturnValue.user;
            },
        }),

        getMe: builder.query<GetMeResponse, void>({
            query: () => ({
                url: '/api/user/me',
                method: 'GET',
            }),

            providesTags: ['User'],

            async onQueryStarted(query, { queryFulfilled, dispatch }) {
                try {
                    const res = await queryFulfilled;
                    const address = res.data.user.address;
                    const degree = res.data.user.degree;
                    const contact = res.data.user.contact[0];
                    const user = res.data.user;

                    dispatch(setUser({ user }));
                    dispatch(setContact({ contact }));

                    if (address) {
                        address.forEach((address) => {
                            dispatch(setAddress({ address }));
                        });
                    }

                    if (degree) {
                        degree.forEach((degree) => {
                            dispatch(setDegree({ degree }));
                        });
                    }
                } catch (error: any) {
                    const message =
                        error?.error?.data?.message ||
                        error.message ||
                        'Get user failed';

                    if (message === 'jwt expired') {
                        localStorage.removeItem('token');
                        // window.location.reload();
                        dispatch(logout());
                    }

                    dispatch(
                        addMessage({
                            message,
                            type: 'error',
                        })
                    );
                }
            },
        }),

        signUp: builder.mutation<User, SignUpRequest>({
            query: (credentials) => ({
                url: '/api/auth/register',
                method: 'POST',
                body: credentials,
            }),

            async onQueryStarted(query, { queryFulfilled, dispatch }) {
                try {
                    const { data: user } = await queryFulfilled;
                    // set token to local storage
                    localStorage.setItem('token', user.token);

                    dispatch(setUser({ user }));

                    dispatch(
                        addMessage({
                            message: 'Sign Up successful',
                            type: 'success',
                        })
                    );

                    // back to previous
                    setTimeout(() => {
                        dispatch(
                            addMessage({
                                message: null,
                                type: null,
                            })
                        );
                    }, 5000);
                } catch (error: any) {
                    dispatch(
                        addMessage({
                            message:
                                error?.error?.data?.message ||
                                error.message ||
                                'Login failed',
                            type: 'error',
                        })
                    );

                    // back to previous
                    setTimeout(() => {
                        dispatch(
                            addMessage({
                                message: null,
                                type: null,
                            })
                        );
                    }, 5000);
                }
            },

            transformResponse(baseQueryReturnValue: AuthResponse, meta, arg) {
                return baseQueryReturnValue.user;
            },
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/api/auth/logout',
                method: 'GET',
            }),
        }),

        forgetPassword: builder.mutation<void, ForgetPassword>({
            query: (credentials) => ({
                url: '/api/auth/forgot-password',
                method: 'POST',
                body: credentials,
            }),

            async onQueryStarted(query, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    console.log(result);
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const {
    useLoginMutation,
    useGetMeQuery,
    useSignUpMutation,
    useForgetPasswordMutation,
} = authAPI;
