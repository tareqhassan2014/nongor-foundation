import { Router } from 'express';
import { isLoggedIn } from '../middleware/isLoggedIn';

const router = Router();

router.use('/auth', require('./auth.router').default);
router.use('/user', require('./user.router').default);

//protected routes
router.use(isLoggedIn);
router.use('/degree', require('./degree.router').default);
router.use('/address', require('./address.router').default);
router.use('/contact', require('./contact.router').default);

export default router;
