const express = require('express');
const handleDB = require('../db/handleDB');
const router  = express.Router();




router.get('/homePageData',(req,res)=>{
    (async function (){
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        let result = await handleDB(res,'select * from recipe where id_category =1;');
        
        res.send(result);
     })();

});
router.get('/categories_list/:Id',(req,res)=>{
    (async function (){
        res.setHeader('Access-Control-Allow-Origin', '*'); 
          
            let categoryId = req.params.Id;
      
        let result = await handleDB(res,`select * from recipe where id_category =${categoryId};`);
        
        res.send(result);
     })();

});




module.exports = router