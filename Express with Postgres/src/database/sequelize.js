const Sequelize = require("sequelize");
const sequelize = new Sequelize( // conexão com o PostgreSQL
/*  "postgres://usuario:senha     @localhost:9999/bd" */    
    "postgres://postgres:@@localhost:5432/dvdrental",
    {
        define: {
            freezeTableName: true, // evita que o sequelize coloque o nome das tabelas no plural
            timestamps: false, // torna opcional as tabelas terem os atributos createdAt e updatedAt
        }
    }
);

module.exports = sequelize;