// src/logger/winston-config.ts

import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';

export const winstonConfig: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        nestWinstonModuleUtilities.format.nestLike('TestingApp', {
          prettyPrint: true,
        }),
      ),
    }),
    new winston.transports.File({
      filename: 'logs/app.log',
      level: 'info',
    }),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
  ],
};
