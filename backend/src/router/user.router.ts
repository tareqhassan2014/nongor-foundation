import { Router } from 'express';
import { getMe, updateMe } from '../controller/user.controller';
import upload from '../lib/multer';
import { isLoggedIn } from '../middleware/isLoggedIn';

const router = Router();

router.use(isLoggedIn);

router.route('/me').get(getMe).patch(upload.single('avatar'), updateMe);

export default router;
