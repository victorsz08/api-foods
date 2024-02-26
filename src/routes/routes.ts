import bodyParser from "body-parser";
import { Express } from "express";


import foods from "./foodRoute";


export default (app: Express) => {
    app.use(
        bodyParser.json(),
        foods
    )
}

