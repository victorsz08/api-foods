import { Router } from "express";
import { getFoodByIdRequest, getFoodsRequest } from "../controllers/foodController";


const router = Router();

router.get("/foods", getFoodsRequest).get("/foods/:id", getFoodByIdRequest);

export default router;