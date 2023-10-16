import { join } from "path";
import env_Config from './env.config.js';
import filter from '../utils/filter.logs.utils.js';
import winston, { transports } from 'winston';
import DailyRotateFile from "winston-daily-rotate-file";

const { combine , colorize , timestamp , json , printf , align } = winston.format;

const file_rotate_configuration = new DailyRotateFile({
    filename: './logs/server/errors-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
})

const console_json = winston.createLogger({
    level : env_Config.log_level,
    format : combine(timestamp(),json()),
    transports : [new winston.transports.Console()]
});

const console = winston.createLogger({
    level : env_Config.log_level,
    format : combine(colorize({all : true }), 
    timestamp({format : "YYYY-MM-DD hh:mm:ss.SSS A"}),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level} : ${info.message}`)),
    transports : [new winston.transports.Console()]
});

const file = winston.createLogger({
    level : env_Config.log_level,
    format : combine(
    timestamp({format : "YYYY-MM-DD hh:mm:ss.SSS A"}),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level} : ${info.message}`)),
    transports : [
        new winston.transports.File({
            filename : join(env_Config.__dirname,'..','logs','app.log'),
        }),
        new winston.transports.File({
            filename : join(env_Config.__dirname,'..','logs','app-errors.log'),
            level : "error",
            format : combine(filter.errorFilter(),timestamp({format: 'YYYY-MM-DD hh:mm:ss.SSS A'}))
        }),
        new winston.transports.File({
            filename : join(env_Config.__dirname,'..','logs','app-info.log'),
            level : "error",
            format : combine(filter.infoFilter(),timestamp({format: 'YYYY-MM-DD hh:mm:ss.SSS A'}))
        }),
        new winston.transports.File({
            filename : join(env_Config.__dirname,'..','logs','app-warn.log'),
            level : "error",
            format : combine(filter.warnFilter(),timestamp({format: 'YYYY-MM-DD hh:mm:ss.SSS A'}))
        }),
    ],
    exceptionHandlers: [
        file_rotate_configuration
      ],
      rejectionHandlers: [
        file_rotate_configuration
      ],
})




const logger = {
    file,
    console_json,
    console
}

export default logger;