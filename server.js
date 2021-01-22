/* import libraries */
const http = require('http');
const express = require('express');

/*instance express */
const app = express();

/*declare express in json format*/
app.use(express.json());

app.use('/', function(req,res){
 res.send(" Server is Working...");
});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug("App working ins port "+ port);