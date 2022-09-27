import {OrderInput, OrderOutput} from "../database/models/OrdersModel";
import * as repository from "../database/repositories/OrdersRepository";

export const getAll = async (): Promise<OrderOutput[]> => {
    return await repository.getAll();
};

export const getById = async (id: number): Promise<OrderOutput> => {
    return await repository.getById(id);
};

export const create = async (payload: OrderInput): Promise<OrderOutput> => {
    return await repository.create(payload);
};

export const updateById = async (id: number, payload: OrderInput): Promise<OrderOutput> => {
    return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    await repository.deleteById(id);
};