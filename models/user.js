const Sequelize =require('sequelize');
const sequelize=require('../settings/db').test;
const Model=Sequelize.Model;
class User extends Model{}
User.init({
    nom:Sequelize.STRING,
    email:Sequelize.STRING,
    mobile:Sequelize.INTEGER,
    ville:Sequelize.STRING
},{
    sequelize,
    modelName:'People'
});

User.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    });
module.exports=User