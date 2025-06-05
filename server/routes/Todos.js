import express from 'express';

import {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from '../controllers/Todos.js';

const router = express.Router();

router.get('/', getAllTodos);
router.post('/', addTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
