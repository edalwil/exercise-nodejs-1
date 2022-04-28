//implement express
const express = require('express');

//importamos los middlewares
const { repairsExists } = require('../middlewares/repairs.middlewares');

//importamos controllers
const {
  getAllRepairs,
  createRepairs,
  searchRepairsId,
  updateRepairs,
  deleteUser,
} = require('../controllers/repairs.controller');

//cramos una variable con otro nombre de app
const router = express.Router();

//logica endpoint
router.get('/', getAllRepairs);
router.post('/', createRepairs);
router
  .route('/:id')
  .get(repairsExists, searchRepairsId)
  .patch(repairsExists, updateRepairs)
  .delete(repairsExists, deleteUser);

//exportamos el archivo
module.exports = { repairsRouter: router };
