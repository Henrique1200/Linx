const Sequelize = require('sequelize');

const sequelize = new Sequelize("PagarMe", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate()
.then(function(){
    console.log("conexão com o banco de dados realizada com sucesso");
}).catch(function(){
    console.log("Erro: conexão com o banco de dados não realizada!")
});

module.exports = sequelize;