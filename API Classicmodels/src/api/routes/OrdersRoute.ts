import express, {Router, Request, Response, NextFunction} from "express";
import * as controller from "../controllers/OrdersController";
import {OrderCreateValidation, OrderUpdateValidation} from "../validations/OrdersValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", OrderCreateValidation, controller.create);

router.put("/:id", OrderUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;