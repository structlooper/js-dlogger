import Logger from "./logger";

const loggerWrapper = (loggerFunction, fileName) =>  (...args) => loggerFunction(fileName, ...args);
export const LoggerWithFile = (fileName) => {
  return {
    info: loggerWrapper(Logger.info, fileName),
    debug: loggerWrapper(Logger.debug, fileName),
    dLog: loggerWrapper(Logger.dLog, fileName),
    warn: loggerWrapper(Logger.warn, fileName),
    error: loggerWrapper(Logger.error, fileName),
  };
};

