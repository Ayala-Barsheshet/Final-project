import {
  serviceGetAllPosts,
  serviceGetPostById,
  serviceAddPost,
  serviceUpdatePost,
  serviceDeletePost,
} from '../service/Posts.js';

export const getAllPosts = async (req, res) => {
  try {
    const userId = req.body?.userId || null;
    const posts = await serviceGetAllPosts(userId);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await serviceGetPostById(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addPost = async (req, res) => {
  try {
    const { userId, title, body } = req.body;
    const newPost = await serviceAddPost(userId, title, body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const updatedPost = await serviceUpdatePost(id, title, body);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await serviceDeletePost(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};