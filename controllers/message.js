

var messages = [
    {
      clientId:0,
      user:"Guest",
      text: "Joined"
    }
  ];


//get- returns all messages
exports.list= function list(request, response){
        
        return response.json(messages);
    }

 

//post 
exports.create= function create(request,response){
            
               messages.push(request.body)

     
                   
         response.json(messages)

  }
