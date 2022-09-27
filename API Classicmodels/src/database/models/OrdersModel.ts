import {DataTypes, Model, Optional} from "sequelize";
import {sequelize} from "../../database/sequelize";
import Customer from "./CustomersModel";

interface OrderAttribute {
    orderNumber: number,
    orderDate: string,
    requiredDate: string,
    shippedDate?: string,
    status: string,
    comments?: string,
    customerNumber: number,
};

// Essas interfaces auxiliares são necessárias caso o id da tabela seja de auto incremento
export interface OrderInput extends Optional<OrderAttribute, "orderNumber">{};
export interface OrderOutput extends Required<OrderAttribute>{};

class Order extends Model <OrderAttribute, OrderInput> {
    declare orderNumber: number;
    declare orderDate: string;
    declare requiredDate: string;
    declare shippedDate: string;
    declare status: string;
    declare comments: string;
    declare customerNumber: number;
};

Order.init({
    orderNumber: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    orderDate: {type: DataTypes.DATEONLY, allowNull: false},
    requiredDate: {type: DataTypes.DATEONLY, allowNull: false},
    shippedDate: {type: DataTypes.DATEONLY},
    status: {type: DataTypes.STRING(15), allowNull: false},
    comments: {type: DataTypes.TEXT},
    customerNumber: {type: DataTypes.INTEGER, allowNull: false},
}, {
    sequelize,
    modelName: "orders"
});

Customer.hasMany(Order, {foreignKey: "customerNumber"});
Order.belongsTo(Customer, {foreignKey: "customerNumber"});

export default Order;