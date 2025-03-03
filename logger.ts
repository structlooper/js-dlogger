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
    console.log(`\x1b[30m\x1b[42m[INFO][${taq}]\x1b[0m[${indicator}]`, message);
  },
  debug: (taq: string, indicator: string, message: string = "UNIVERSAL") => {
    if (isDev) {
      console.log(`\x1b[30m\x1b[44m[DEV][${taq}]\x1b[0m[${indicator}]`, message);
    }
  },
  dLog: (taq: string, indicator: string, data: any = " ") => {
    if (isDev) {
      console.log('\x1b[30m\x1b[43m---------------------------------\x1b[0m');
      console.log(`\x1b[30m\x1b[43m[DEV][${taq}]\x1b[0m[${indicator}]`);
      console.log(data);
      console.log('\x1b[30m\x1b[43m---------------------------------\x1b[0m');
    }
  },
  warn: (taq: string, indicator: string, message: string = "UNIVERSAL") => {
    console.warn(`\x1b[30m\x1b[43m[WARN]\x1b[0m\x1b[30m\x1b[43m[${taq}]\x1b[0m[${indicator}]`, message);
  },
  error: (taq: string, indicator: string, message: string = "UNIVERSAL") => {
    console.error(`\x1b[30m\x1b[41m[ERROR]\x1b[0m\x1b[30m\x1b[41m[${taq}]\x1b[0m[${indicator}]`, message);
  }
};

export default Logger;