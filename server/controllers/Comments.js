import {
  serviceGetAllComments,
  serviceAddComment,
  serviceUpdateComment,
  serviceDeleteComment
} from '../service/Comments.js';

export const getAllComments = async (req, res) => {
  try {
    const { postId } = req.query;
    const comments = await serviceGetAllComments(postId);
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const { postId, name, email, body } = req.body;
    const newComment = await serviceAddComment(postId, name, email, body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req.body;
    const updatedComment = await serviceUpdateComment(id, body);
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await serviceDeleteComment(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

