import { Router } from "express";
import FoxesController from "../controller/FoxesController.js";
import FoxesMongooseRepository from "../repository/FoxesMongooseRepository.js";

const foxesRouter = Router();

const foxesRepository = new FoxesMongooseRepository();
const foxesController = new FoxesController(foxesRepository);

foxesRouter.get("/", foxesController.getFoxes);
foxesRouter.get("/:foxId", foxesController.getFoxById);

export default foxesRouter;
