import AppError from "../../utils/AppError";
import model, {ProductInput, ProductOutput} from "../models/ProductsModel";

export const getAll = async (): Promise<ProductOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: string): Promise<ProductOutput> => {
    const product = await model.findOne({
        where: {
            productCode: id,
        },
    });

    if (!product) {
        throw new AppError("NotFoundError", "Registro não encotrado", 404);
    };

    return product;
};

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: string, payload: ProductInput): Promise<ProductOutput> => {
    const product = await model.findByPk(id);

    if (!product) {
        throw new Error("Registro não encontrado");
    };

    return await product.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
    const product = await model.findByPk(id);

    if (!product) {
        throw new Error("Registro não encontrado");
    };

    await product.destroy();
};