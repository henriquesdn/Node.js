import {DataTypes, Model, Optional} from "sequelize";
import {sequelize} from "../../database/sequelize";

interface ProductLineAttributes {
    productLine: string,
    textDescription?: string,
    htmlDescription?: string,
    image?: string,
};

// Essas interfaces auxiliares são necessárias caso o id da tabela seja de auto incremento
export interface ProductLineInput extends Optional<ProductLineAttributes, "productLine">{};
export interface ProductLineOutput extends Required<ProductLineAttributes>{};

class ProductLine extends Model <ProductLineAttributes, ProductLineInput> {
    declare productLine: string;
    declare textDescription: string;
    declare htmlDescription: string;
    declare image: string;
};

ProductLine.init({
    productLine: {type: DataTypes.STRING(50), primaryKey: true, allowNull: false},
    textDescription: {type: DataTypes.STRING(4000)},
    htmlDescription: {type: DataTypes.TEXT("medium")},
    image: {type: DataTypes.BLOB("medium")},
}, {
    sequelize,
    modelName: "productlines"
});

export default ProductLine;