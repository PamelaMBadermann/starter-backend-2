import express, { Router, Request, Response } from "express";
import cors from 'cors';
import Routes from "../../features/users/presentation/routes/routes"

export default class App {
    readonly #express: express.Application

    constructor() {
        this.#express = express();
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({ extended: true }));
    }

    public get server(): express.Application {
        return this.#express;
    }

    public init(): void {
        this.config();
        this.routes();
    }
        
    private config() {
        this.#express.use(express.urlencoded({extended: false}));
        this.#express.use(express.json());
        this.#express.use(cors());
    }

    private routes(): void {
        const router = Router();

        router.get("/", (request: Request, response: Response) => {
            response.send("Api funcionando...");
        });

        const userRoutes = new Routes().init();

        this.#express.use(router);
        this.#express.use(userRoutes);
    }

    public start(port: number): void {
        this.#express.listen(port, () => {
            console.log(`Api rodando na porta ${port}`)
        })
    }
}