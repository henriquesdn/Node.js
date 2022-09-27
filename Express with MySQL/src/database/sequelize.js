const Sequelize = require("sequelize");
const sequelize = new Sequelize( // conexão com o MySQL
/*  "mysql://usuario:senha@localhost:9999/bd" */    
    "mysql://root:@localhost:3306/classicmodels",
    {
        define: {
            freezeTableName: true, // evita que o sequelize coloque o nome das tabelas no plural
            timestamps: false, // torna opcional as tabelas terem os atributos createdAt e updatedAt
        }
    }
);

module.exports = sequelize;