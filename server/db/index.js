const Sequelize = require('sequelize');

const sequelize = new Sequelize('blockChecking','root','root', {
    dialect: 'postgres',
    host:"127.0.0.1"
})

const formCheck = require('./FormCheck')(sequelize);


module.exports = {
    sequelize,
    formsCheck: formCheck
}
