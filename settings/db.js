const Sequelize = require ('sequelize')
const test = new Sequelize('CRUD_SEQUELIZE','root','kouakouf',{
    host:'localhost',
    dialect:'mysql',
}); 

const connection = ()=>{
    test.authenticate()
    .then(()=>{
        console.log('connection etablie a la bd avec succes');
    }).catch(err=>{
        console.log('erreur de connection a la bd ',err);
    })
}
module.exports={test,connection}