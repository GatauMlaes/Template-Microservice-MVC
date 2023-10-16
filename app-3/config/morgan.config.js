import morgan from "morgan";
import logger from "./winston.config.js";

function morgan_middleware() {
    return morgan(
      ':method :url :status :res[content-length] - :response-time ms',
      {
        stream: {
          // Configure Morgan to use our custom logger with the http severity
          write: (message) => logger.console.info(message.trim()),
        },
      }
    );
  }

export default morgan_middleware