
$('#main-container').hide();



let clientId=0;
let obj=[];
let messObj=[];
const data = {};
let theName;
let user=theName;
let text="";


window.onload = function(){
    fetch('http://localhost:8080/clients', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({ 'Status': "Client Logged In" })
    })
    .then(response => response.json())
    .then(data => clientId = data)
        obj.push(data);
        $('#name').focus();
}

function renameUser(){
     theName= $('#name').val();
   if(theName == null || theName == ''){
      theName="Guest";
   }
       if(clientId!=0){
        if(obj.indexOf(clientId) !== -1){
          alert("Value exists");
       } else{

         
          let usersN=
            {
              clientId: clientId,
              user:theName,
              text:"joined"
            };

        fetch('http://localhost:8080/users', {
          method: "POST",
          mode: 'cors',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(usersN)
         
         })
         
          .then(response => response.json()) 
         // .then(response => console.log(JSON.stringify(response))); 
       
         
           setInterval(listUsers, 1000);


        }

      }

   $('#prompt').fadeOut(200);

   $('#main-container').show();
   $('#theMessage').focus();
  }


function listUsers(){
let messagesDivForUser = document.getElementById('who')
let displayUser = '';
fetch('http://localhost:8080/users', {
  method: "GET",
  mode: 'cors', 
  headers: {
    'Content-Type': 'application/json',
  },
})
    .then(response => response.json())
    .then(userData=> {
     
        userData.map(m => {
          if(m.user === theName){
          displayUser += `<div>${m.user}&nbsp (Me) </div><br>`
          }else{
         displayUser += `<div>${m.user}&nbsp: ${m.text}</div><br>`
          }
          })
          
      var newUserJoined= displayUser.replace('<div>GuestInRename&nbsp: joined</div><br>', ''); 
       messagesDivForUser.innerHTML = newUserJoined;
      }) 
}



function postInputTxt(){
    let message = document.getElementById('theMessage').value;
    
    if(message){
     let body = {clientId: clientId,
      user:theName,
      text:message};

      document.getElementById('theMessage').value = '';

  //  fetch('http://localhost:8080/messages', {

      fetch('/messages', {
      method: "POST",
      mode: 'cors', 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
     
     })
      .then(response => response.json()) 
   //   .then(info => console.log(info)); 
    } 
    
 }



setInterval(function(){ 
  let messagesDiv = document.getElementById('messagesForDisplay')
  let displayMsg = '';
 // fetch('http://localhost:8080/messages')
  fetch('/messages')
      .then(response => response.json())
      .then(data => {
           data.map(m => {
          
                displayMsg += `<div>${m.user}&nbsp: ${m.text}</div><br>`
                
            })

           var newMessage= displayMsg.replace('<div>Guest&nbsp: Joined</div><br>', ''); 
          
         messagesDiv.innerHTML = newMessage;
        }) 
}, 1000)

