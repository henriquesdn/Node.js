import express, {Router, Request, Response, NextFunction} from "express";
import * as controller from "../controllers/EmployeesController";
import {EmployeeCreateValidation, EmployeeUpdateValidation} from "../validations/EmployeesValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", EmployeeCreateValidation, controller.create);

router.put("/:id", EmployeeUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;