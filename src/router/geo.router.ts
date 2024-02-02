import { Router } from 'express';
import * as GeoController from '../controllers/geo.controller';

const router = Router();

router.get('/departments', GeoController.getDepartments);

export default router;
