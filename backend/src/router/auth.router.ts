import { Router } from 'express';
import {
    forgetPassword,
    login,
    logout,
    register,
    resetPassword,
    sendVerificationEmail,
    updatePassword,
    verifyEmail,
} from '../controller/auth.controller';
import { isLoggedIn } from '../middleware/isLoggedIn';

const router = Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);

router.route('/forgot-password').post(forgetPassword);
router.route('/verify-email').post(sendVerificationEmail);
router.route('/reset-password/:token').patch(resetPassword);
router.route('/verify-email/:token').get(verifyEmail);

// update password
router.route('/update-password').patch(isLoggedIn, updatePassword);

export default router;
