import { Router } from "express";
import UserController from "../controllers/user.controller";

export default class Routes {
    private resource = "user";

    public init(): Router {
        const routes = Router();
        const controller = new UserController();

        routes.get(`/${this.resource}`, controller.index);
        routes.get(`/${this.resource}/:id`, controller.show);
        routes.get(`/${this.resource}`, controller.store);

        return routes;
    }
}