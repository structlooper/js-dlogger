let environment: string = 'development';
let config: any;

try {
  // Attempt to dynamically import the logger.config file
  // @ts-ignore
  config = require('../../logger.config')?.default;
} catch (error) {
  console.warn(
      'No environment config found, defaulting to "development".\n ' +
      'If using React Native, create a file "logger.config.js" in the root directory'
  );
}

// Checking if the global environment variable is set
if (globalThis.__APP_ENV__) {
  environment = globalThis.__APP_ENV__ as string; // Type assertion
} else if (config?.ENV) {
  environment = config.ENV;
}

console.log('Project Environment set to:', environment);

const isDev: boolean = (environment.toLowerCase() === "development");

interface Logger {
  info: (taq: string, indicator: string, message?: string) => void;
  debug: (taq: string, indicator: string, message?: string) => void;
  dLog: (taq: string, indicator: string, data?: any) => void;
  warn: (taq: string, indicator: string, message?: string) => void;
  error: (taq: string, indicator: string, message?: string) => void;
}

const Logger: Logger = {
  info: (taq: string, indicator: string, message: string = "UNIVERSAL") => {
    console.log(`[INFO][${taq}][${indicator}]`, message);
  },
  debug: (taq: string, indicator: string, message: string = "UNIVERSAL") => {
    if (isDev) {
      console.log(`[DEV][${taq}][${indicator}]`, message);
    }
  },
  dLog: (taq: string, indicator: string, data: any = " ") => {
    if (isDev) {
      console.log('---------------------------------\n');
      console.log(`[DEV][${taq}]`, indicator);
      console.log(data);
      console.log('---------------------------------\n');
    }
  },
  warn: (taq: string, indicator: string, message: string = "UNIVERSAL") => {
    console.warn(`[WARN][${taq}][${indicator}]`, message);
  },
  error: (taq: string, indicator: string, message: string = "UNIVERSAL") => {
    console.error(`[ERROR][${taq}][${indicator}]`, message);
  }
};

export default Logger;