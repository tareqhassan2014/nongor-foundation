import baseAPI from '../../app/baseAPI';

interface Response {
    url: string;
}

export const donationAPI = baseAPI.injectEndpoints({
    endpoints: (build) => ({
        createDonation: build.mutation<Response, Donate>({
            query: (donation) => ({
                url: '/api/payment/initialize',
                method: 'POST',
                body: donation,
            }),
        }),
    }),
});

export const { useCreateDonationMutation } = donationAPI;
