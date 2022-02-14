import { ListController } from "controllers/ListController";
import { Router } from "express";

const routes = Router();

const listController = new ListController();

routes.get("/list", listController.listAll);
routes.get("/list/:id", listController.index);

export { routes };