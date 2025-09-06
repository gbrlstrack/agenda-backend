const express = require('express');
const userRoutes = require('./api/routes/userRoutes');
const cors = require('cors');
const logger = require('./utils/logger');

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

const globalErrorHandler = (err, req, res, next) => {
    logger.error({
        message: err.message,
        statusCode: err.statusCode || 500,
        stack: err.stack,
        path: req.path,
        method: req.method,
        ip: req.ip,
        validationErrors: err.errors
    })

    const statusCode = err.statusCode || 500;
    const status = statusCode >= 500 ? "error" : "fail";
    const message = err.message || "Erro interno do servidor.";

    const responseBody = {
        status: status,
        message: message
    };

    if (err.errors) {
        responseBody.errors = err.errors;
    }

    res.status(statusCode).json(responseBody);
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/v1/users', userRoutes);
app.use(globalErrorHandler);

module.exports = app;