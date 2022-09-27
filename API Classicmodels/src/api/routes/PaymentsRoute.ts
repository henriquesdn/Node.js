import express, {Router, Request, Response, NextFunction} from "express";
import * as controller from "../controllers/PaymentsController";
import {PaymentCreateValidation, PaymentUpdateValidation} from "../validations/PaymentsValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", PaymentCreateValidation, controller.create);

router.put("/:id", PaymentUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;