import { Router } from 'express';
import { isLoggedIn } from '../middleware/isLoggedIn';
import { testRoute } from './testRoute';

const router = Router();

router.use('/auth', require('./auth.router').default);
router.use('/user', require('./user.router').default);
router.use('/payment', require('./payment.router').default);
router.post('/test', testRoute);

//protected routes
router.use(isLoggedIn);
router.use('/degree', require('./degree.router').default);
router.use('/address', require('./address.router').default);
router.use('/contact', require('./contact.router').default);

export default router;
