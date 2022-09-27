import {Router} from "express";
import customers from "./CustomersRoute";
import employees from "./EmployeesRoute";
import offices from "./officesRoute";
import orders from "./ordersRoute";
import payments from "./paymentsRoute";
import productLines from "./productLinesRoute";
import products from "./productsRoute";
import auths from "./AuthsRoute"
import { ensureIsAuthenticated } from "../middlewares/AuthsMiddleware";

const router = Router();

router.use("/auth", auths);

router.use(ensureIsAuthenticated);

router.use("/customers", customers);
router.use("/employees", employees);
router.use("/offices", offices);
router.use("/orders", orders);
router.use("/payments", payments);
router.use("/productlines", productLines);
router.use("/products", products);

export default router;