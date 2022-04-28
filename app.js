// importamos express
const express = require('express');

//init express app
const app = express();

//Routers
const { userRouter } = require('./router/user.routes');
const { repairsRouter } = require('./router/repairs.routes');

//Utils
const { db } = require('./utils/database');

//Habilitar datos JSON entrantes
app.use(express.json());

// Endpoints
app.use('/api/v1/users', userRouter);

app.use('/api/v1/repairs', repairsRouter);

// conecion base de datos
db.authenticate()
  .then(() => console.log('database authenticated'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('database sync'))
  .catch((err) => console.log(err));

// girar el servidor
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`express app runngin on port: ${PORT}`);
});
