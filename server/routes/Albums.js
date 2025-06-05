import express from 'express';
import { getAllAlbums, addAlbum } from '../controllers/Albums.js';

const router = express.Router();

router.get('/', getAllAlbums);   
router.post('/', addAlbum);        

export default router;
