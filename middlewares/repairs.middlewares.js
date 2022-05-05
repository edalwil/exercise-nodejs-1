//importamos model user
const { Repairs } = require('../models/repairs.model');
const { User } = require('../models/user.model');

//utils
const { AppError } = require('../utils/appError');

//realizamos la funcion con req, res, next
const repairsExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const repairs = await Repairs.findOne({
      where: { id },
      include: [{ model: User }],
    });

    if (repairs.status === 'canceled') {
      res.status(400).json({
        status: 'canceled',
        message: 'service is canceled',
      });
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
