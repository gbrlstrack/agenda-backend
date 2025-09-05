const express = require('express');
const userRoutes = require('./api/routes/userRoutes');
//TODO: construir um middleware de errorHandler
// const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use('/api/v1/users', userRoutes);
// app.use(errorHandler);

module.exports = app;