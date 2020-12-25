let express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("./public"));

let clientRoutes=require("./routes/client.js");
let messageRoutes=require("./routes/message.js");
let renameuserRoutes=require("./routes/renameuser.js");




app.use(clientRoutes);
app.use(messageRoutes);
app.use(renameuserRoutes);



 
/*
const thePort = 8080;
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);


});

*/

let port = process.env.PORT || 3000;
 /*if (port == null || port == "") {
  port = 3000;
}  */
app.listen(port);