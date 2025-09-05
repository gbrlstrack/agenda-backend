const express = require('express');
const userRoutes = require('./api/routes/userRoutes');
const cors = require('cors');
//TODO: construir um middleware de errorHandler
// const errorHandler = require('./middlewares/errorHandler');

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/v1/users', userRoutes);
// app.use(errorHandler);

module.exports = app;