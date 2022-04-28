const { User } = require('../models/user.model');

//listado de usuarios
const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

//buscar usuario
const searchUserId = async (req, res) => {
  try {
    const { user } = req;

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

//crear usuarios nuevo
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = await User.create({ name, email, password, role });

    res.status(201).json({ status: 'success' });
  } catch (error) {
    res.status(400).json({ status: 'error' });
  }
};

//modificar usuario
const updateUser = async (req, res) => {
  try {
    const { user } = req;
    const { name, email } = req.body;

    await user.update({ name, email });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error(error);
  }
};

//eliminar usuario
const deleteUser = async (req, res) => {
  try {
    const { user } = req;

    await user.update({ status: 'delete' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllUser,
  createUser,
  searchUserId,
  updateUser,
  deleteUser,
};
