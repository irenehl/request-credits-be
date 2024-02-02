import express from 'express';
import { Upload } from '../controllers/s3.controller';

const router = express.Router();

router.post('/', Upload);

export default router;
