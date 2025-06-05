import {
  serviceGetPhotos,
  serviceAddPhoto,
  serviceUpdatePhoto,
  serviceDeletePhoto,
} from '../service/Photos.js';

export const getPhotos = async (req, res) => {
  try {
    const { albumId } = req.query;
    const { _start = 0, _limit = 5 } = req.query;
    const photos = await serviceGetPhotos(albumId, parseInt(_start), parseInt(_limit));
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addPhoto = async (req, res) => {
  try {
    const { albumId, title, url, thumbnailUrl } = req.body;
    const newPhoto = await serviceAddPhoto(albumId, title, url, thumbnailUrl);
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url, thumbnailUrl } = req.body;
    const updatedPhoto = await serviceUpdatePhoto(id, { title, url, thumbnailUrl });
    res.status(200).json(updatedPhoto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    await serviceDeletePhoto(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
