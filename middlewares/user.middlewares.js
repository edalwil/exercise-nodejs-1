//importamos model user
const { User } = require('../models/user.model');

//realizamos la funcion con req, res, next
const userExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'user not found given that id ',
      });
    }

    //envio de infomacion del usuario encontrado
    req.user = user;

    next();
  } catch (error) {
    console.error(error);
  }
};

//exportamos la funcion
module.exports = { userExists };
