const winston = require("winston");

const { createLogger: createWinstonLogger, format, transports } = winston;

const createLogger = () =>
  createWinstonLogger({
    level: "info",
    format: format.combine(
      format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      format.printf(info => `${info.timestamp} - ${info.level}: ${info.message}`),
    ),
    transports: [new transports.Console()],
  });

module.exports = createLogger;
