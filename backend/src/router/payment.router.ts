import { Router } from 'express';
import {
    initPaymentGateway,
    paymentCancel,
    paymentFail,
    paymentSuccess,
} from '../controller/payment.controller';

const router = Router();

// initialize payment gateway
router.route('/initialize').post(initPaymentGateway);
router.route('/success').post(paymentSuccess);
router.route('/cancel').post(paymentCancel);
router.route('/fail').post(paymentFail);

export default router;
