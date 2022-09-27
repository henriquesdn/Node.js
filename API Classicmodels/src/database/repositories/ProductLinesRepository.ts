import AppError from "../../utils/AppError";
import model, {ProductLineInput, ProductLineOutput} from "../models/ProductLinesModel";
import Product from "../models/ProductsModel";

export const getAll = async (): Promise<ProductLineOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: string): Promise<ProductLineOutput> => {
    const productLine = await model.findByPk(id);

    if (!productLine) {
        throw new AppError("NotFoundError", "Registro não encotrado", 404);
    };

    return productLine;
};

export const create = async (payload: ProductLineInput): Promise<ProductLineOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: string, payload: ProductLineInput): Promise<ProductLineOutput> => {
    const productLine = await model.findByPk(id);

    if (!productLine) {
        throw new Error("Registro não encontrado");
    };

    return await productLine.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
    const productLine = await model.findByPk(id);

    if (!productLine) {
        throw new Error("Registro não encontrado");
    };

    await productLine.destroy();
};