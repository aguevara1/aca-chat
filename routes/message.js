let express = require("express");
const router=express.Router();
const {list, create} = require("../controllers/message");


// tasks
router.get('/messages', list);
router.post('/messages', create);  
/*
router.get('/messages', (request, response) =>{
   response.json(messages);

})

router.post('/messages', (request, response) =>{
    //console.log(request.body)
   
    messages.push({
        "clientId": request.body.clientId,
        "text": request.body.message
      })
      response.json(messages);

  
    
})
*/


module.exports=router;


/*
app.post('/messages', (req, res) => {
    console.log(req.body)
    messages.push({
      "cliendId": req.body.clientId,
      "clientId": req.body.clientId,
      "text": req.body.message
    })
    res.json(messages)
  */