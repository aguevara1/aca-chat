let express = require("express");
const router=express.Router();
const {list, create} = require("../controllers/renameuser");


// tasks
router.get('/users', list);
router.post('/users', create);  

/*
router.post('/clients', (request, response)=>{
    clientId++;
    console.log(clientId);

response.send(clientId.toString());


})   */
   


module.exports=router;