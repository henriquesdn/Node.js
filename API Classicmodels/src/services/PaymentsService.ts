import {PaymentInput, PaymentOutput} from "../database/models/PaymentsModel";
import * as repository from "../database/repositories/PaymentsRepository";

export const getAll = async (): Promise<PaymentOutput[]> => {
    return await repository.getAll();
};

export const getById = async (id: string): Promise<PaymentOutput> => {
    return await repository.getById(id);
};

export const create = async (payload: PaymentInput): Promise<PaymentOutput> => {
    return await repository.create(payload);
};

export const updateById = async (id: string, payload: PaymentInput): Promise<PaymentOutput> => {
    return await repository.updateById(id, payload);
};

export const deleteById = async (id: string): Promise<void> => {
    await repository.deleteById(id);
};