const express = require('express'); // importamos la libreria express
const cors = require('cors'); //importamos la libreria cors
const rateLimit = require('express-rate-limit'); // impotamos la libreria express-rate-limit

//init express app
const app = express();

//controller
const { errorGlobal } = require('./controllers/error.controllers');

//habilitamos cors
app.use(cors());

//Routers
const { userRouter } = require('./router/user.routes');
const { repairsRouter } = require('./router/repairs.routes');

//Habilitar datos JSON entrantes
app.use(express.json());

//limit ip requests
const limiter = rateLimit({
  max: 10000, // cantidad de peticiones que queremos recibir
  windowMs: 1 * 60 * 60 * 1000, // tiempo que podemos recibir esas peticiones ejemplo 30 * 1000 = 30000 s = 30 s
  message: 'too many requests from this IP',
});

app.use(limiter); // estamos la escucha las const limiter

// Endpoints
app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairsRouter);

//escucha de mis error globales
app.use('*', errorGlobal);

module.exports = { app };
