//importamos express
const express = require('express');

//importaos los middlewares
const { userExists } = require('../middlewares/user.middlewares');
const {
  ckeckValidator,
  createValidator,
} = require('../middlewares/validations.middlewares');

//importamos contollers
const {
  getAllUser,
  createUser,
  searchUserId,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

// creamos una variable con otro nombre de app
const router = express.Router();

// logica endpoint
router.get('/', getAllUser);

router.post('/', createValidator, ckeckValidator, createUser);

// router.get('/:id', searchUserId);

// router.patch('/:id', updateUser);

// router.delete('/:id', deleteUser);

router
  .route('/:id')
  .get(userExists, searchUserId)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

//exportamos el archivo
module.exports = { userRouter: router };
