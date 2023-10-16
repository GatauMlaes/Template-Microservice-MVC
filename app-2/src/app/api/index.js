import routes from "../../routes/routes.js"
import errors_middleware from "../../middleware/errors.middlewares.js"
import errorsNotFound from "../../errors/errors.not.found.js"
import morgan_middleware from "../../../config/morgan.config.js"
import express from "express";


const app = express()

app.use(express.json())
app.use(routes)
app.use(errors_middleware)
app.use(errorsNotFound);
//app.use(morgan_middleware())
export default app