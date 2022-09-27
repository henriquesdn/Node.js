import Customer from "./models/CustomersModel";
import Employee from "./models/EmployeesModel";
import Office from "./models/OfficesModel";
import OrderDetail from "./models/OrderDetailsModel";
import Order from "./models/OrdersModel";
import Payment from "./models/PaymentsModel";
import ProductLine from "./models/ProductLinesModel";
import ProductModel from "./models/ProductsModel";
import User from "./models/UsersModel";
import {connectDatabase} from "./sequelize";

export const initdb = async () => {
    Promise.all([
        await connectDatabase(),
        console.log("Sincronizando tabelas"),
        await User.sync({alter: true}),
        await Customer.sync({alter: true}),
        await Employee.sync({alter: true}),
        await Office.sync({alter: true}),
        await OrderDetail.sync({alter: true}),
        await Order.sync({alter: true}),
        await Payment.sync({alter: true}),
        await ProductLine.sync({alter: true}),
        await ProductModel.sync({alter: true}),
    ]).then(()=>{
        console.log("Tabelas sincronizadas com sucesso");
    }).catch(()=>{
        console.log("Erro ao tentar sincronizar tabelas");
    });
};