import Logger from "logger/logger";

const loggerWrapper = (loggerFunction, fileName) =>  (...args) => loggerFunction(fileName, ...args);
export const LoggerWithFile = (fileName) => {
  return {
    info: loggerWrapper(Logger.info, fileName),
    debug: loggerWrapper(Logger.debug, fileName),
    dLog: loggerWrapper(Logger.dLog, fileName),
    Warn: loggerWrapper(Logger.Warn, fileName),
    Error: loggerWrapper(Logger.Error, fileName),
  };
};

