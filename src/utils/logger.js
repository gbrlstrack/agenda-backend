const winston = require('winston');
const { combine, timestamp, printf, json, colorize, align, errors } = winston.format;

const consoleFormat = combine(
    colorize(),
    timestamp({ format: 'HH:mm:ss' }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
);

const fileFormat = combine(
    errors({ stack: true }),
    timestamp(),
    json()       
);

const logger = winston.createLogger({
    level: 'info',
    
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: consoleFormat
        }),

        new winston.transports.File({
            filename: 'logs/errors.log',
            level: 'error',
            format: fileFormat,
            maxsize: 5242880,
            maxFiles: 5,
        }),

        new winston.transports.File({ 
            filename: 'logs/combined.log',
            level: 'debug',
            format: fileFormat,
            maxsize: 5242880,
            maxFiles: 5,
        })
    ],

    exceptionHandlers: [
        new winston.transports.File({ filename: 'logs/exceptions.log', format: fileFormat })
    ],
    rejectionHandlers: [
        new winston.transports.File({ filename: 'logs/rejections.log', format: fileFormat })
    ]
});

module.exports = logger;