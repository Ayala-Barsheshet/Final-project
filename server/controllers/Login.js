import {
  serviceGetUserByUsername,
  serviceAddUser,
  serviceUpdateUser
} from '../service/Login.js';


export const getUserByUsername = async (req, res) => {
  try {
    const { username, website } = req.query;
    const user = await serviceGetUserByUsername(username, website);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    const { username, website } = req.body;
    const newUser = await serviceAddUser(username, website);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const formData = req.body;
    const newUser = await serviceUpdateUser(formData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};