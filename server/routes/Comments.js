import express from 'express';
import {
  getAllComments,
  addComment,
  updateComment,
  deleteComment
} from '../controllers/Comments.js';

const router = express.Router();

router.get('/', getAllComments);
router.post('/', addComment);
router.patch('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;