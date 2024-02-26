import { Sequelize } from "sequelize-typescript";
import "dotenv/config";

import Foods from "../models/Foods";


export const sequelize = new Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    port: 42276,
    dialect: "mysql",
    repositoryMode: true
})



sequelize.addModels([Foods]);