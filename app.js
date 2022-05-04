// importamos express
const express = require('express');
const cors = require('cors');

//init express app
const app = express();

//controller
const { errorGlobal } = require('./controllers/error.controllers');

//habilitamos cors
app.use(cors());

//Routers
const { userRouter } = require('./router/user.routes');
const { repairsRouter } = require('./router/repairs.routes');

//Utils
const { db } = require('./utils/dataBase');

//Habilitar datos JSON entrantes
app.use(express.json());

// Endpoints
app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairsRouter);

//escucha de mis error globales
app.use('*', errorGlobal);

module.exports = { app };
