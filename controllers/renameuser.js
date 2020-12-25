


   var users=[
      {
       clientId:0,
       user:"GuestInRename",
       text:"joined"
      }
   ];

      //get- returns all users
exports.list= function list(request, response){
        
    return response.json(users);
}


   //post 
 exports.create=function create (request, response){
         users.push(request.body);
            
      response.json(users);
      
   }
   
   