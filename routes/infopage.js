const express = require('express');
const handleDB = require('../db/handleDB');
const router  = express.Router();
router.get("/recipes_detail/:id",(req, res) => {
    (async function (){
        res.setHeader('Access-Control-Allow-Origin', '*')
        let {id} = req.params
        let result = await handleDB(res,`select * from recipe where idrecipe =${id};`);
        let data = {recipe:result[0]};
        res.send(data);
     })();
});
module.exports = router