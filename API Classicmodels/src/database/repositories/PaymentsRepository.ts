import AppError from "../../utils/AppError";
import Customer from "../models/CustomersModel";
import model, {PaymentInput, PaymentOutput} from "../models/PaymentsModel";

export const getAll = async (): Promise<PaymentOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: string): Promise<PaymentOutput> => {
    const payment = await model.findOne({
        where: {
            checkNumber: id,
        },
    });

    if (!payment) {
        throw new AppError("NotFoundError", "Registro não encotrado", 404);
    };

    return payment;
};

export const create = async (payload: PaymentInput): Promise<PaymentOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: string, payload: PaymentInput): Promise<PaymentOutput> => {
    const payment = await model.findByPk(id);

    if (!payment) {
        throw new Error("Registro não encontrado");
    };

    return await payment.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
    const payment = await model.findByPk(id);

    if (!payment) {
        throw new Error("Registro não encontrado");
    };

    await payment.destroy();
}; 