import AppError from "../../utils/AppError"
import User, { UserAttributes } from "../models/UsersModel"

export const findById = async (email: string): Promise<UserAttributes> => {
    const user = await User.findByPk(email);

    if (!user) {
        throw new AppError("NotFound", "Usuário não encontrado", 404);
    }

    return user;
};

export const create = async (payload: UserAttributes): Promise<UserAttributes> => {
    const { email } = payload;
    const user = await User.findByPk(email);

    if (user) {
        throw new AppError("UserConflict", "Usuário já existe", 409);
    }

    return await User.create(payload);
};