import {ProductInput, ProductOutput} from "../database/models/ProductsModel";
import * as repository from "../database/repositories/ProductsRepository";

export const getAll = async (): Promise<ProductOutput[]> => {
    return await repository.getAll();
};

export const getById = async (id: string): Promise<ProductOutput> => {
    return await repository.getById(id);
};

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    return await repository.create(payload);
};

export const updateById = async (id: string, payload: ProductInput): Promise<ProductOutput> => {
    return await repository.updateById(id, payload);
};

export const deleteById = async (id: string): Promise<void> => {
    await repository.deleteById(id);
};