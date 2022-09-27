import {Error, Sequelize} from "sequelize";
import {initdb} from "./initdb";

export const sequelize = new Sequelize("classicmodels", "root", "", {
    host: "localhost",
    dialect: "mysql",
    define: {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    },
    timezone: "-03:00",
    logging: false
});

export const connectDatabase = async () => {
    await sequelize.authenticate()
    .then(() => {
        console.log("Conexão com o MySQL realizada com sucesso");
    })
    .catch((error: Error) => {
        console.log(`Conexão com o MySQL não foi bem sucedida: ${error}`);
    });
};