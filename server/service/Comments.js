import db from '../../DB/mysql.js';

export const serviceGetAllComments = async (postId) => {
  try {
    const query = 'SELECT * FROM comments WHERE postId = ?';
    const [results] = await db.promise().query(query, [postId]);
    return results;
  } catch (err) {
    throw err;
  }
};

export const serviceAddComment = async (postId, name, email, body) => {
  try {
    const query = 'INSERT INTO comments (postId, name, email, body) VALUES (?, ?, ?, ?)';
    const [result] = await db.promise().query(query, [postId, name, email, body]);
    return { id: result.insertId, postId, name, email, body };
  } catch (err) {
    throw err;
  }
};

export const serviceDeleteComment = async (id) => {
  try {
    const query = 'DELETE FROM comments WHERE id = ?';
    await db.promise().query(query, [id]);
  } catch (err) {
    throw err;
  }
};

export const serviceUpdateComment = async (id, body) => {
  try {
    const query = 'UPDATE comments SET body = ? WHERE id = ?';
    await db.promise().query(query, [body, id]);
    return { id, body };
  } catch (err) {
    throw err;
  }
};