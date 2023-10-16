import Service from "../service/service.js"
import models from "../models/models.js"
import env from "../../config/env.config.js"
const service = new Service(models);
class Controller {
  static async index(req,res,next){
    try{
      const result = await service.getAll();
      res.json({data : result , metadata : "Example MS from " + env.name_ms})
    } catch(error){
      next(error)
    }
  }
}

export default Controller