import { ErrorQuery } from "../middlewares/ErrorQuerys";
import { getFoods, getFoodById } from "../services/foodService";
import { Request, Response } from "express";




export async function getFoodsRequest(req: Request, res: Response) {
    const query = req.query;

    try {
        const response = await getFoods(query);
        res.status(200).send(response);
    } catch (error) {
        if(error instanceof ErrorQuery) {
            return res.status(error.statusCode).send(error.message);
        };
        res.status(500).send({message: error});
    };
};


export async function getFoodByIdRequest(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const response = await getFoodById(id);
        res.status(200).send(response)
    } catch (error) {
        if(error instanceof ErrorQuery) {
            return res.status(error.statusCode).send(error.message);
        };
        res.status(500).send({message: error});
    };
};