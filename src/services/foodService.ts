import Foods from "../database/models/Foods";
import { sequelize } from "../database/config/sequelize";
import { Op, QueryInterface } from "sequelize";
import { ErrorQuery } from "../middlewares/ErrorQuerys";





const foodRepository = sequelize.getRepository(Foods);



export async function getFoods(query: any) {
    const { perPage, page, order, sort, search } = query;

    const perPageOption = parseInt(perPage) || 10;
    const pageOption = parseInt(page) | 1;

    const queryOptions: any = {
        offset: (pageOption - 1) / perPageOption,
        limit: perPageOption,
        order: [],
        where: {}
    };

    if(sort && order) {
        queryOptions.order.push([sort, order.toUpperCase()]);
    };

    if(search) {
        queryOptions.where[Op.or] = [
            { description: { [Op.like] : `%${search}`}},
            { category: { [Op.like] : `%${search}%`}}
        ]
    };
    
    const foods = await foodRepository.findAll(queryOptions);

    if(foods.length === 0) {
        throw new ErrorQuery("No content", 204)
    }

    return foods;
};

export async function getFoodById(id: string | number) {
    const food = await foodRepository.findOne({
        where: {
            id: id
        }
    });

    if(!food) {
        throw new ErrorQuery("No content", 204)
    };

    return food;
};