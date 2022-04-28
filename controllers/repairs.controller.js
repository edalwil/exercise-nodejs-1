const { Repairs } = require('../models/repairs.model');

//listado de reparaciones
const getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repairs.findAll();
    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

//buscar reaparacion con id
const searchRepairsId = async (req, res) => {
  try {
    const { repairs } = req;

    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

//crear nueva reparacion
const createRepairs = async (req, res) => {
  try {
    const { date, userid } = req.body;
    const newRepairs = await Repairs.create({ date, userid });

    res.status(201).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

//actualizar reparaciones
const updateRepairs = async (req, res) => {
  try {
    const { repairs } = req;
    const { status } = req.body;

    await repairs.update({ status });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error(error);
  }
};

//eliminar usuario
const deleteUser = async (req, res) => {
  try {
    const { repairs } = req;

    await repairs.update({ status: 'canceled' });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllRepairs,
  createRepairs,
  searchRepairsId,
  updateRepairs,
  deleteUser,
};
