import { Router } from 'express';
import {
    createDegree,
    deleteDegree,
    updateDegree,
} from '../controller/degree.controller';

const router = Router();

router.route('/').post(createDegree);
router.route('/:id').put(updateDegree).delete(deleteDegree);

export default router;
