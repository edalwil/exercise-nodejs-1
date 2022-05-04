//importamos model user
const { Repairs } = require('../models/repairs.model');

//utils
const { AppError } = require('../utils/appError');

//realizamos la funcion con req, res, next
const repairsExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const repairs = await Repairs.findOne({ where: { id } });

    if (repairs.status === 'canceled') {
      return next(new AppError('service is canceled', 400));
    }

    //envio de infomacion del usuario encontrado
    req.repairs = repairs;

    next();
  } catch (err) {
    next(err);
  }
};

//exportamos la funcion
module.exports = { repairsExists };
