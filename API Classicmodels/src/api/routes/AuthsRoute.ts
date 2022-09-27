import { Router } from "express";
import * as controller from "../controllers/AuthsController"
import { AuthSignValidation } from "../validations/AuthsValidation";

const router = Router();

router.post("/signup", AuthSignValidation, controller.signUp);
router.post("/signin", AuthSignValidation, controller.signIn);

export default router;