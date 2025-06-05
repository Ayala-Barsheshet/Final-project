import db from '../../DB/mysql.js';

export const serviceGetPhotos = async (albumId, start, limit) => {
    try {
        const query = 'SELECT * FROM photos WHERE albumId = ? LIMIT ?, ?';
        const [results] = await db.promise().query(query, [albumId, start, limit]);
        return results;
    } catch (err) {
        throw err;
    }
};

export const serviceAddPhoto = async (albumId, title, url, thumbnailUrl) => {
    try {
        const query = 'INSERT INTO photos (albumId, title, url, thumbnailUrl) VALUES (?, ?, ?, ?)';
        const [result] = await db.promise().query(query, [albumId, title, url, thumbnailUrl]);
        return { id: result.insertId, albumId, title, url, thumbnailUrl };
    } catch (err) {
        throw err;
    }
};

export const serviceUpdatePhoto = async (id, fields) => {
    try {
        const updates = [];
        const values = [];

        for (const [key, value] of Object.entries(fields)) {
            if (value !== undefined) {
                updates.push(`${key} = ?`);
                values.push(value);
            }
        }

        if (updates.length === 0) throw new Error('No valid fields to update');

        const query = `UPDATE photos SET ${updates.join(', ')} WHERE id = ?`;
        values.push(id);
        await db.promise().query(query, values);

        return { id, ...fields };
    } catch (err) {
        throw err;
    }
};

export const serviceDeletePhoto = async (id) => {
    try {
        const query = 'DELETE FROM photos WHERE id = ?';
        await db.promise().query(query, [id]);
    } catch (err) {
        throw err;
    }
};
