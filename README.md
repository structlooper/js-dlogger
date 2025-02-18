# js-dlogger (logger for js frameworks)


## **📌 Description**

 js-dlogger is a lightweight, configurable logger for JavaScript, React.js, and React Native applications. It provides structured logging with different levels (info, debug, dLog, Warn, Error) and supports environment-based logging.

---

<p align="center">
  <a href="https://www.npmjs.com/package/js-dlogger">
    <img src="https://img.shields.io/npm/v/js-dlogger?color=brightgreen&label=npm&logo=npm" alt="npm version" />
  </a>
  <a href="https://github.com/structlooper/js-dlogger/issues">
    <img src="https://img.shields.io/github/issues/structlooper/js-dlogger?color=yellow&label=issues&logo=github" alt="GitHub issues" />
  </a>
  <a href="https://github.com/structlooper/js-dlogger">
    <img src="https://img.shields.io/github/stars/structlooper/js-dlogger?color=blue&label=GitHub%20Stars&logo=github" alt="GitHub stars" />
  </a>
  <a href="https://github.com/structlooper/js-dlogger/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/structlooper/js-dlogger" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/js-dlogger">
    <img src="https://img.shields.io/npm/dt/js-dlogger?color=purple&label=Downloads&logo=npm" alt="npm downloads" />
  </a>
</p>

## **Installation**

Install the package via npm:

```bash
npm install js-dlogger

```

or
```bash
yarn add js-dlogger

```

##  Usage : 

## **✅ Basic Usage**
Here’s an example to get you started:

```javascript
import Logger from "js-dlogger";

Logger.info("App", "INIT", "Application started");
Logger.debug("App", "DEBUG", "This is a debug message");
Logger.dLog("App", "DATA", { key: "value" });
Logger.warn("App", "WARNING", "This is a warning message");
Logger.error("App", "ERROR", "An error occurred");
```
## **📌 Logger with File Context**
Here’s an example to get you started:
```javascript
import {LoggerWithFile} from 'js-dlogger/loggerWrapper';

const Logger =  LoggerWithFile("Login.jsx");
Logger.info("INIT", "Application started");
Logger.debug("DEBUG", "This is a debug message");
Logger.dLog("DATA", { key: "value" });
Logger.warn("WARNING", "This is a warning message");
Logger.error("ERROR", "An error occurred");
```

## **🌎 Environment-Based Logging**
The logger dynamically determines the environment:
- **React**: If globalThis.__APP_ENV__ is set, it will be used.
- **React Native**: If logger.config.js is available, it loads the environment from there.
- **Any js-framework** : Otherwise, it defaults to development.

**Example logger.config.js:**
```javascript
/**
 * Config file for {logger}
 * @return Object : ENV value
 * @alias : development | production
 * @development ~ for development environment
 * @production ~ release & disable debug logs
 * @author structlooper
 * */
export default {
  ENV: 'production', 
};
```
## **🛠 Best Practices**
**1️⃣ Ensure the Config File Exists (If Required)**

If your project needs logger.config.js, make sure to create it:
```javascript
export default {
  ENV: 'production', 
};
```
**2️⃣ Use File-Based Logging for Easier Debugging**

Instead of passing taq manually, use LoggerWithFile for consistency.
```javascript
const Logger =  LoggerWithFile("Login.jsx")
```

---

## **⚡️ Troubleshooting**

| Issue                              | Solution                                                                |  
|------------------------------------|-------------------------------------------------------------------------|  
| Metro bundler error                | Ensure `logger.config.js` exists or use the `try-catch` approach.      |  
| Environment is always development   | Check if `globalThis.__APP_ENV__` or `logger.config.js` is correctly set. |
---
## **📜 License**

This project is licensed under the MIT License. See the [LICENSE](https://github.com/structlooper/js-dlogger/blob/master/LICENSE) file for details.

---

## **Contributing**

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/structlooper/js-dlogger/issues).

---

## **📧 Contact**

For support, feedback, or contributions, reach out via GitHub: [structlooper](https://github.com/structlooper).

