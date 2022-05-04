//importamos model user
const { User } = require('../models/user.model');

//utilis
const { AppError } = require('../utils/appError');

//realizamos la funcion con req, res, next
const userExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    if (!user) {
      return next(new AppError(`${id} does not exist`, 400));
    }

    //envio de infomacion del usuario encontrado
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

//exportamos la funcion
module.exports = { userExists };
