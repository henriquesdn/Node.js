import express, {Router, Request, Response, NextFunction} from "express";
import * as controller from "../controllers/ProductLinesController";
import {ProductLineCreateValidation, ProductLineUpdateValidation} from "../validations/ProductLinesValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", ProductLineCreateValidation, controller.create);

router.put("/:id", ProductLineUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;