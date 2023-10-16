import { Router } from "express";
import Controller from "../controller/controller.js"
const routes = Router();

routes.get("/" , Controller.index)

export default routes