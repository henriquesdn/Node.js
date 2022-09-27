import {DataTypes, Model} from "sequelize";
import {sequelize} from "../../database/sequelize";
import Order from "./OrdersModel";
import Product from "./ProductsModel";

interface OrderDetailAttributes {
    orderNumber: number,
    productCode: string,
    quantityOrdered: number,
    priceEach: number,
    orderLineNumber: number,
};

class OrderDetail extends Model <OrderDetailAttributes> {
    declare orderNumber: number;
    declare productCode: string;
    declare quantityOrdered: number;
    declare priceEach: number;
    declare orderLineNumber: number;
};

OrderDetail.init(
    {
        orderNumber: {type: DataTypes.INTEGER, allowNull: false},
        productCode: {type: DataTypes.STRING(20), allowNull: false},
        quantityOrdered: {type: DataTypes.INTEGER, allowNull: false},
        priceEach: {type: DataTypes.DECIMAL(10, 2), allowNull: false},
        orderLineNumber: {type: DataTypes.SMALLINT, allowNull: false},
    },
    {
        sequelize,
        modelName: "orderdetails",
    }
);

OrderDetail.removeAttribute("id"); // Para fazer a relação N:N sem que o sequelize crie um novo atributo

Order.belongsToMany(Product, {foreignKey: "orderNumber", through: OrderDetail});
Product.belongsToMany(Order, {foreignKey: "productCode", through: OrderDetail});

export default OrderDetail;