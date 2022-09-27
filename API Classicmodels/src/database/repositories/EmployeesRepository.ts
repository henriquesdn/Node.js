import AppError from "../../utils/AppError";
import model, {EmployeeInput, EmployeeOutput} from "../models/EmployeesModel";

export const getAll = async (): Promise<EmployeeOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: number): Promise<EmployeeOutput> => {
    const employee = await model.findOne({
        where: {
            employeeNumber: id,
        },
    });

    if (!employee) {
        throw new AppError("NotFoundError", "Registro não encotrado", 404);
    };

    return employee;
};

export const create = async (payload: EmployeeInput): Promise<EmployeeOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: number, payload: EmployeeInput): Promise<EmployeeOutput> => {
    const employee = await model.findByPk(id);

    if (!employee) {
        throw new Error("Registro não encontrado");
    };

    return await employee.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const employee = await model.findByPk(id);

    if (!employee) {
        throw new Error("Registro não encontrado");
    };

    await employee.destroy();
};