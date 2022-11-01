import SSLCommerzPayment from 'sslcommerz-lts';
import { v4 as uuidV4 } from 'uuid';
import catchAsync from '../util/catchAsync';

const store_id = 'nongo63601df9ac1a1';

const store_passwd = 'nongo63601df9ac1a1@ssl@ssl';

const is_live = process.env.NODE_ENV === 'production'; //true for live, false for sandbox

//sslcommerz init
export const initPaymentGateway = catchAsync(async (req, res) => {
    const {
        amount,
        currency,
        tran_id,
        success_url,
        fail_url,
        cancel_url,
        ipn_url,
        multi_card_name,
        emi_option,
        name,
        email,
        cus_add1,
        cus_add2,
        cus_city,
        cus_state,
        cus_postcode,
        cus_country,
        cus_phone,
        cus_fax,
        shipping_method,
        num_of_item,
        product_name,
        product_category,
        product_profile,
        value_a,
        value_b,
        value_c,
        value_d,
    } = req.body;
    const data = {
        total_amount: amount,
        currency: 'BDT',
        tran_id: uuidV4(), // use unique tran_id for each api call
        success_url: 'http://localhost:3000/api/payment/success',
        fail_url: 'http://localhost:3000/api/payment/fail',
        cancel_url: 'http://localhost:3000/api/payment/cancel',
        ipn_url: 'http://localhost:3000/api/payment/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: name,
        cus_email: email,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };

    const sslcz = new SSLCommerzPayment(
        'nongo63601df9ac1a1',
        'nongo63601df9ac1a1@ssl',
        false
    );
    sslcz.init(data).then((apiResponse) => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL;

        res.json({
            status: 'success',
            url: GatewayPageURL,
        });
    });
});

// payment success
export const paymentSuccess = catchAsync(async (req, res) => {
    res.redirect(`http://localhost:3001/donate/success/${req.body.tran_id}`);
});

// payment fail
export const paymentFail = catchAsync(async (req, res) => {
    res.redirect(`http://localhost:3001/donate/failed/${req.body.tran_id}`);
});

// payment cancel
export const paymentCancel = catchAsync(async (req, res) => {
    res.redirect(`http://localhost:3001`);
});
