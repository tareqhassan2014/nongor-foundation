import { Router } from 'express';
import {
    createContact,
    deleteContact,
    updateContact,
} from '../controller/contact.controller';

const router = Router();

router.route('/').post(createContact);
router.route('/:id').put(updateContact).delete(deleteContact);

export default router;
