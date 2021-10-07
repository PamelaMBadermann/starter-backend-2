import { Request, Response } from "express";
import userData from "../../../../core/infra/data/users.data";

export default class UserController {
    public index (request: Request, response: Response) {
        return response.send(userData);
    }

    public show (request: Request, response: Response) {
        const { id } = request.params;
        const user = userData.find(user => user.id === Number(id));

        return response.json(user)
    }

    public store (request: Request, response: Response) {
        const user = request.body;
        user.id = userData.length;

        userData.push(user);
        
        return response.json(user)
    }
}