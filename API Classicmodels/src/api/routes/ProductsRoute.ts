import express, {Router, Request, Response, NextFunction} from "express";
import * as controller from "../controllers/ProductsController";
import {ProductCreateValidation, ProductUpdateValidation} from "../validations/ProductsValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", ProductCreateValidation, controller.create);

router.put("/:id", ProductUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;