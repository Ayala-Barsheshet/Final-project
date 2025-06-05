import db from '../../DB/mysql.js';

export const serviceGetAllTodos = async (userId) => {
  try {
    const query = 'SELECT * FROM todos WHERE userId = ?';
    const [results] = await db.promise().query(query, [userId]);
    return results || null;
  } catch (err) {
    throw err;
  }
};

export const serviceAddTodo = async (userId, title, completed) => {
  try {
    const query = 'INSERT INTO todos (userId, title, completed) VALUES (?, ?, ?)';
    const [result] = await db.promise().query(query, [userId, title, completed]);
    return { id: result.insertId, userId, title, completed };
  } catch (err) {
    throw err;
  }
};

export const serviceUpdateTodo = async (id, updatedField) => {
  try {
    const fieldNameToUpdate = Object.keys(updatedField)[0];
    const valueToUpdate = updatedField[fieldNameToUpdate];

    const allowedFields = ['title', 'completed'];
    if (!allowedFields.includes(fieldNameToUpdate)) {
      throw new Error('Invalid field to update');
    }

    const query = `UPDATE todos SET ${fieldNameToUpdate} = ? WHERE id = ?`;
    await db.promise().query(query, [valueToUpdate, id]);

    return { id, [fieldNameToUpdate]: valueToUpdate };
  } catch (err) {
    throw err;
  }
};

export const serviceDeleteTodo = async (id) => {
  try {
    const query = 'DELETE FROM todos WHERE id = ?';
    await db.promise().query(query, [id]);
  } catch (err) {
    throw err;
  }
};

