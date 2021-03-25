const Sequelize = require('sequelize');

const sequelize = new Sequelize('blockChecking','root','artem#Ivanov18dev', {
    dialect: 'mysql',
    host:"127.0.0.1"
})

sequelize.authenticate()
.then(res => console.log('Database connect'))
.catch(err => console.log('error'));

const formChecks = require('./FormCheck')(sequelize);
const adminLog = require('./adminLog')(sequelize);


module.exports = {
    sequelize,
    formsCheck: formChecks,
    LogAdmin: adminLog
}
