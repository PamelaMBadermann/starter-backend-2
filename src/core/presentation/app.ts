import express, { Router } from "express";
import cors from 'cors';

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

    public init() {
        this.config();
        this.routes();
    }
        
    private config() {
        this.#express.use(express.urlencoded({extended: false}));
        this.#express.use(express.json());
        this.#express.use(cors());
    }
}