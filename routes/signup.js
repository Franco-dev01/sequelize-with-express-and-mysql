var express = require('express');
const queryU=require('../models/user');
const query=require('../models/house');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup');
});


router.post('/' ,async function(req,res,next){

  try{
    if(req.body.type==='person'){
      console.log(req.body);
     await queryU.create({
        nom:req.body.nom,
        email:req.body.email,
        mobile:req.body.mobile,
        ville:req.body.ville
      })
      .then(dataUser =>{
        console.log(dataUser.toJSON());
        res.redirect('/')
      });
   
    }else{
      console.log(req.body);
     await query.create({
        maison:req.body.maison,
        superficie:req.body.superficie,
        prix:req.body.prix,
        localisation:req.body.localisation
      })
      .then(data =>{
        console.log(data.toJSON());
        res.redirect('/');
      });
      
    }
  
  

}catch(e){
  console.error(e);
}
  });


module.exports = router;
