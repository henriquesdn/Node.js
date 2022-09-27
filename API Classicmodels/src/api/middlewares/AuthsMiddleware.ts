import { Request, Response, NextFunction } from "express";
import AppError from "../../utils/AppError";
import jwt from "jsonwebtoken";
import { secret } from "../../config/auth.config";

export const ensureIsAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        throw new AppError("MissedToken", "O token não esta presente na requisição", 401);
    };

    try {
        jwt.verify(token, secret);
    } catch (error) {
        throw new AppError("InvalidToken", "O token é inválido", 401);
    };

    next();
};