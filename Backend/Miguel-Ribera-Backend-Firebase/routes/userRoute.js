import express from 'express';

import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  getRides,
  login
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/new', createUser);
router.post("/login", login);
router.post("/rides", getRides);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;