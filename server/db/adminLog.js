const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('admin', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        login: {
            type: Sequelize.CHAR,
            allowNull:false
        },
        password: {
            type: Sequelize.CHAR,
            allowNull:false,
        }
    },{
        timestamps:false,
        tableName:'admin'
    });
}