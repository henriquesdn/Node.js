import {DataTypes, Model, Optional} from "sequelize";
import {sequelize} from "../../database/sequelize";
import Customer from "./CustomersModel";

interface PaymentAttribute {
    customerNumber: number,
    checkNumber: string,
    paymentDate: number,
    amount: number,
};

// Essas interfaces auxiliares são necessárias caso o id da tabela seja de auto incremento
export interface PaymentInput extends Optional<PaymentAttribute, "customerNumber">{};
export interface PaymentOutput extends Required<PaymentAttribute>{};

class Payment extends Model <PaymentAttribute, PaymentInput> {
    declare customerNumber: number;
    declare checkNumber: string;
    declare paymentDate: number;
    declare amount: number;
};

Payment.init({
    customerNumber: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    checkNumber: {type: DataTypes.STRING(50), allowNull: false},
    paymentDate: {type: DataTypes.DATEONLY, allowNull: false},
    amount: {type: DataTypes.DECIMAL(10, 2), allowNull: false},
}, {
    sequelize,
    modelName: "payments",
    paranoid: true
});

Payment.removeAttribute("id") // Evita que o sequelize crie um id para o modelo, já que a PK não foi especificada

Customer.hasMany(Payment, {foreignKey: "customerNumber"});
Payment.belongsTo(Customer, {foreignKey: "customerNumber"});

export default Payment;