import AppError from "../../utils/AppError";
import Employee from "../models/EmployeesModel";
import model, {OfficeInput, OfficeOutput} from "../models/OfficesModel";

export const getAll = async (): Promise<OfficeOutput[]> => {
    return await model.findAll();
}; 

export const getById = async (id: string): Promise<OfficeOutput> => {
    const office = await model.findOne({
        where: {
            officeCode: id,
        },
    });
    
    if (!office) {
        throw new AppError("NotFoundError", "Registro não encotrado", 404);
    };

    return office;
};

export const create = async (payload: OfficeInput): Promise<OfficeOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: string, payload: OfficeInput): Promise<OfficeOutput> => {
    const office = await model.findByPk(id);

    if (!office) {
        throw new Error("Registro não encontrado");
    };

    return await office.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
    const office = await model.findByPk(id);

    if (!office) {
        throw new Error("Registro não encontrado");
    };

    await office.destroy();
};