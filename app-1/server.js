import env from "./config/env.config.js"
import logger from "./config/winston.config.js"
import app from "./src/app/api/index.js"

app.listen(env.port, () => logger.console.info("Listening On The Port "+ env.uri))