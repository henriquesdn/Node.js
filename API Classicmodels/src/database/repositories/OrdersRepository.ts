import AppError from "../../utils/AppError";
import model, {OrderInput, OrderOutput} from "../models/OrdersModel";

export const getAll = async (): Promise<OrderOutput[]> => {
    return await model.findAll();
}; 

export const getById = async (id: number): Promise<OrderOutput> => {
    const order = await model.findOne({
        where: {
            orderNumber: id,
        },
    });

    if (!order) {
        throw new AppError("NotFoundError", "Registro não encotrado", 404);
    };

    return order;
};

export const create = async (payload: OrderInput): Promise<OrderOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: number, payload: OrderInput): Promise<OrderOutput> => {
    const order = await model.findByPk(id);

    if (!order) {
        throw new Error("Registro não encontrado");
    };

    return await order.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const order = await model.findByPk(id);

    if (!order) {
        throw new Error("Registro não encontrado");
    };

    await order.destroy();
};