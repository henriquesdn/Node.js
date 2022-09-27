import express, {Router, Request, Response, NextFunction} from "express";
import * as controller from "../controllers/CustomersController";
import {CustomerCreateValidation, CustomerUpdateValidation} from "../validations/CustomersValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", CustomerCreateValidation, controller.create);

router.put("/:id", CustomerUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;