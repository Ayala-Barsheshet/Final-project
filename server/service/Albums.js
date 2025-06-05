import db from '../../DB/mysql.js';

export const serviceGetAllAlbums = async (userId) => {
    try {
        const query = 'SELECT * FROM albums WHERE userId = ?';
        const [results] = await db.promise().query(query, [userId]);
        return results || [];
    } catch (err) {
        throw err;
    }
};

export const serviceAddAlbum = async (userId, title) => {
    try {
        const query = 'INSERT INTO albums (userId, title) VALUES (?, ?)';
        const [result] = await db.promise().query(query, [userId, title]);
        return { id: result.insertId, userId, title };
    } catch (err) {
        throw err;
    }
};
