// create degree API

import baseAPI from '../../app/baseAPI';
import { addMessage } from '../message/messageSlice';
import { setDegree, updateDegree } from './degreeSlice';

export const degreeAPI = baseAPI.injectEndpoints({
    endpoints: (build) => ({
        createDegree: build.mutation<Degree, Degree>({
            query: (degree) => ({
                url: '/api/degree',
                method: 'POST',
                body: {
                    ...degree,
                    GPA: Number(degree?.GPA),
                },
            }),

            invalidatesTags: ['Degree'],

            async onQueryStarted(query: Degree, { queryFulfilled, dispatch }) {
                try {
                    const { data: degree } = await queryFulfilled;

                    dispatch(setDegree({ degree }));

                    dispatch(
                        addMessage({
                            message: 'Degree created successfully',
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
                                'Degree creation failed try again',
                            type: 'error',
                        })
                    );
                }
            },

            transformResponse(baseQueryReturnValue: any, meta, arg) {
                return baseQueryReturnValue.degree;
            },
        }),

        updateDegree: build.mutation<Degree, Degree>({
            query: (degree) => ({
                url: `/api/degree/${degree.id}`,
                method: 'PUT',
                body: {
                    ...degree,
                    GPA: Number(degree?.GPA) || 1,
                },
            }),

            async onQueryStarted(query: Degree, { queryFulfilled, dispatch }) {
                try {
                    const { data: degree } = await queryFulfilled;

                    dispatch(updateDegree({ degree }));

                    dispatch(
                        addMessage({
                            message: 'Degree updated successfully',
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
                                'Degree update failed try again',
                            type: 'error',
                        })
                    );
                }
            },

            transformResponse(baseQueryReturnValue: any, meta, arg) {
                return baseQueryReturnValue.degree;
            },
        }),
    }),
});

export const { useCreateDegreeMutation, useUpdateDegreeMutation } = degreeAPI;
