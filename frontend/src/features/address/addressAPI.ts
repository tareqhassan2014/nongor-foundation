// create address API slice

import baseAPI from '../../app/baseAPI';
import { addMessage } from '../message/messageSlice';
import { setAddress } from './addressSlice';

export const addressAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        createAddress: builder.mutation<Address, Address>({
            query: (address) => ({
                url: '/api/address',
                method: 'POST',
                body: address,
            }),
            invalidatesTags: ['Address'],
            async onQueryStarted(query: Address, { queryFulfilled, dispatch }) {
                try {
                    const { data: address } = await queryFulfilled;

                    dispatch(setAddress({ address }));

                    dispatch(
                        addMessage({
                            message: 'Address created successfully',
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
                                'Address creation failed try again',
                            type: 'error',
                        })
                    );
                }
            },

            transformResponse(baseQueryReturnValue: any, meta, arg) {
                return baseQueryReturnValue.address;
            },
        }),

        updateAddress: builder.mutation<Address, Address>({
            query: (address) => ({
                url: `/api/address/${address.id}`,
                method: 'PUT',
                body: address,
            }),
            invalidatesTags: ['Address'],
            async onQueryStarted(query, { queryFulfilled, dispatch }) {
                try {
                    const { data: address } = await queryFulfilled;

                    dispatch(setAddress({ address }));

                    dispatch(
                        addMessage({
                            message: 'Address updated successfully',
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
                                'Address update failed try again',
                            type: 'error',
                        })
                    );
                }
            },

            transformResponse(baseQueryReturnValue: any, meta, arg) {
                return baseQueryReturnValue.address;
            },
        }),
    }),
});

export const { useCreateAddressMutation, useUpdateAddressMutation } =
    addressAPI;
