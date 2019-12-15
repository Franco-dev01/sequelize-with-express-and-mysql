const Sequelize = require('sequelize');
const sequelize=require('../settings/db').test;
const Model=Sequelize.Model;
class User2 extends Model{}
User2.init({
    maison:Sequelize.STRING,
    superficie:Sequelize.STRING,
    prix:Sequelize.INTEGER,
    localisation:Sequelize.STRING
},{
    sequelize,
    modelName:'Houses',
});
//User.belongsTo(user,{ as:'current',foreignKey:'currentCategorieId',constraints:true});

User2.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    });
module.export=User2;