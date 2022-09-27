import { Op } from "sequelize";
import { Query } from "../../shared/types/query";
import AppError from "../../utils/AppError";
import { getPagination } from "../../utils/GetPagination";
import model, {CustomerInput, CustomerOutput} from "../models/CustomersModel";

export const getAll = async (customerName: string, query: Query): Promise<{rows: CustomerOutput[], count: number}> => {
    let {size, page, sort, order, ...filters} = query;

    const id = "customerNumber";
    const {...pagination} = getPagination(id, query);

    if (!customerName) customerName = "";

    return await model.findAndCountAll({
        where: {
            customerName: {[Op.like]: `%${customerName}%`},
            ...filters
        },
        ...pagination,
    });
};

export const getById = async (id: number): Promise<CustomerOutput> => {
    const customer = await model.findOne({
        where: {
            customerNumber: id,
        },
    });

    if (!customer) {
        throw new AppError("NotFoundError", "Registro não encotrado", 404);
    };

    return customer;
};

export const create = async (payload: CustomerInput): Promise<CustomerOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: number, payload: CustomerInput): Promise<CustomerOutput> => {
    const customer = await model.findByPk(id);

    if (!customer) {
        throw new Error("Registro não encontrado");
    };

    return await customer.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const customer = await model.findByPk(id);

    if (!customer) {
        throw new Error("Registro não encontrado");
    };

    await customer.destroy();
};