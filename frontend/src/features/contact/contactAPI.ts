import baseAPI from '../../app/baseAPI';
import { addMessage } from '../message/messageSlice';
import { setContact } from './contactSlice';

export const contactAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        createContact: builder.mutation<Contact, Contact>({
            query: (contact) => ({
                url: '/api/contact',
                method: 'POST',
                body: contact,
            }),

            async onQueryStarted(query, { queryFulfilled, dispatch }) {
                try {
                    const { data: contact } = await queryFulfilled;

                    dispatch(setContact({ contact }));

                    dispatch(
                        addMessage({
                            message: 'Contact created',
                            type: 'success',
                        })
                    );

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
                                'Contact creation failed',
                            type: 'error',
                        })
                    );

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

            transformResponse(baseQueryReturnValue: any, meta, arg) {
                return baseQueryReturnValue.contact;
            },
        }),

        updateContact: builder.mutation<Contact, Contact>({
            query: (contact) => ({
                url: `/api/contact/${contact.id}`,
                method: 'PUT',
                body: contact,
            }),

            async onQueryStarted(query, { queryFulfilled, dispatch }) {
                try {
                    const { data: contact } = await queryFulfilled;

                    dispatch(setContact({ contact }));

                    dispatch(
                        addMessage({
                            message: 'Contact created',
                            type: 'success',
                        })
                    );

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
                                'Contact creation failed',
                            type: 'error',
                        })
                    );

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

            transformResponse(baseQueryReturnValue: any, meta, arg) {
                return baseQueryReturnValue.contact;
            },
        }),
    }),
});

export const { useCreateContactMutation, useUpdateContactMutation } =
    contactAPI;
