import express from 'express';
import {
  getUserByUsername,
  addUser,
  updateUser
} from '../controllers/Login.js';

const router = express.Router();

router.get('/', getUserByUsername);
router.post('/', addUser);
router.patch('/', updateUser);

export default router;
