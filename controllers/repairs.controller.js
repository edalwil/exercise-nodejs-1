const { Repairs } = require('../models/repairs.model');
const { User } = require('../models/user.model');

//listado de reparaciones
const getAllRepairs = async (req, res, next) => {
  try {
    const repairs = await Repairs.findAll({
      include: [{ model: User }],
    });

    res.status(200).json({
      repairs,
    });
  } catch (err) {
    next(err);
  }
};

//buscar reaparacion con id
const searchRepairsId = async (req, res, next) => {
  try {
    const { repairs } = req;

    res.status(200).json({
      repairs,
    });
  } catch (err) {
    next(err);
  }
};

//crear nueva reparacion
const createRepairs = async (req, res, next) => {
  try {
    const { date, userId } = req.body;
    const newRepairs = await Repairs.create({ date, userId });

    res.status(201).json({ status: 'success' });
  } catch (err) {
    next(err);
  }
};

//actualizar reparaciones
const updateRepairs = async (req, res, next) => {
  try {
    const { repairs } = req;
    const { status } = req.body;

    await repairs.update({ status });

    res.status(200).json({ status: 'success' });
  } catch (err) {
    console.error(err);
  }
};

//eliminar usuario
const deleteUser = async (req, res, next) => {
  try {
    const { repairs } = req;

    await repairs.update({ status: 'canceled' });

    res.status(200).json({ status: 'success' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllRepairs,
  createRepairs,
  searchRepairsId,
  updateRepairs,
  deleteUser,
};
