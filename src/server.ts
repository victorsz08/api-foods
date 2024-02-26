import express from "express";
import routes from "./routes/routes";
import "dotenv/config";
import cors from "cors"

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

const app = express();

app.use(cors({
    origin: process.env.ORIGIN,
    methods: ["GET"],
    optionsSuccessStatus: 200,
}));

routes(app);

app.get("/", (req, res) => {
    res.status(200).send({message: "Api Foods - Calorias de Alimentos"});
});


app.listen(port, () => {
    console.log("server running in port: " + port);
});