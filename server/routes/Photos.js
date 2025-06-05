import express from 'express';
import {
    getPhotos,
    addPhoto,
    updatePhoto,
    deletePhoto
} from '../controllers/Photos.js';

const router = express.Router();

router.get('/', getPhotos); 
router.post('/', addPhoto);
router.patch('/:id', updatePhoto);
router.delete('/:id', deletePhoto);

export default router;
