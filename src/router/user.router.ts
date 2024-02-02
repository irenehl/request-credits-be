import express from 'express';
import * as UserController from '../controllers/user.controller';

const router = express.Router();

router.post('/', UserController.addUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.findUserById);

export default router;
