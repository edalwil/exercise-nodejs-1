//importamos model user
const { Repairs } = require('../models/repairs.model');

//realizamos la funcion con req, res, next
const repairsExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const repairs = await Repairs.findOne({ where: { id } });

    if (!repairs) {
      return res.status(404).json({
        status: 'error',
        message: 'user not found given that id ',
      });
    }

    //envio de infomacion del usuario encontrado
    req.repairs = repairs;

    next();
  } catch (error) {
    console.error(error);
  }
};

//exportamos la funcion
module.exports = { repairsExists };
