import {CustomerInput, CustomerOutput} from "../database/models/CustomersModel";
import * as repository from "../database/repositories/CustomersRepository";
import { Query } from "../shared/types/query";

export const getAll = async (customerName: string, query: Query): Promise<{rows: CustomerOutput[], count: number} > => {
    return await repository.getAll(customerName, query);
};

export const getById = async (id: number): Promise<CustomerOutput> => {
    return await repository.getById(id);
};

export const create = async (payload: CustomerInput): Promise<CustomerOutput> => {
    return await repository.create(payload);
};

export const updateById = async (id: number, payload: CustomerInput): Promise<CustomerOutput> => {
    return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    await repository.deleteById(id);
};