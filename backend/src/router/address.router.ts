import { Router } from 'express';
import {
    createAddress,
    deleteAddress,
    updateAddress,
} from '../controller/address.controller';

const router = Router();

router.route('/').post(createAddress);
router.route('/:id').delete(deleteAddress).put(updateAddress);

export default router;
