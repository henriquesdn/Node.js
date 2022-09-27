import express, {Router, Request, Response, NextFunction} from "express";
import * as controller from "../controllers/OfficesController";
import {OfficeCreateValidation, OfficeUpdateValidation} from "../validations/OfficesValidation";

const router = Router();

router.get("/", controller.getAll);

router.get("/:id", controller.getById);

router.post("/", OfficeCreateValidation, controller.create);

router.put("/:id", OfficeUpdateValidation, controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;