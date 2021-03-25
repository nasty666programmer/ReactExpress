const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('formCheck', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        date: {
            type: Sequelize.DATE,
            allowNull:false
        },
        img: {
            type: Sequelize.BLOB,
            allowNull:false,
        }
    },{
        timestamps:false,
        tableName:'formCheck'
    });
}