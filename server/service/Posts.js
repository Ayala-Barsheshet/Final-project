import db from '../../DB/mysql.js';

export const serviceGetAllPosts = async (userId) => {
  try {
    const query = userId
      ? 'SELECT * FROM posts WHERE userId = ?'
      : 'SELECT * FROM posts';
    const [results] = await db.promise().query(query, userId ? [userId] : []);
    return results;
  } catch (err) {
    throw err;
  }
};

export const serviceGetPostById = async (id) => {
  try {
    const query = 'SELECT * FROM posts WHERE id = ?';
    const [results] = await db.promise().query(query, [id]);
    return results[0] || null;
  } catch (err) {
    throw err;
  }
};

export const serviceAddPost = async (userId, title, body) => {
  try {
    const query = 'INSERT INTO posts (userId, title, body) VALUES (?, ?, ?)';
    const [result] = await db.promise().query(query, [userId, title, body]);
    return { id: result.insertId, userId, title, body };
  } catch (err) {
    throw err;
  }
};

export const serviceUpdatePost = async (id, title, body) => {
  try {
    const query = 'UPDATE posts SET title = ?, body = ? WHERE id = ?';
    await db.promise().query(query, [title, body, id]);
    return { id, title, body };
  } catch (err) {
    throw err;
  }
};

export const serviceDeletePost = async (id) => {
  try {
    const query = 'DELETE FROM posts WHERE id = ?';
    await db.promise().query(query, [id]);
  } catch (err) {
    throw err;
  }
};