import { serviceGetAllAlbums, serviceAddAlbum } from '../service/Albums.js';

export const getAllAlbums = async (req, res) => {
    try {
        const { userId } = req.query;
        if (!userId) return res.status(400).json({ error: 'Missing userId' });

        const albums = await serviceGetAllAlbums(userId);
        res.status(200).json(albums || []);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addAlbum = async (req, res) => {
    try {
        const { userId, title } = req.body;
        if (!userId || !title) return res.status(400).json({ error: 'Missing userId or title' });

        const newAlbum = await serviceAddAlbum(userId, title);
        res.status(201).json(newAlbum);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
