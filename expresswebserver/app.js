const { response } = require('express');
let express = require('express');
let app = express();
let formidable = require('formidable');

app.use(express.static(__dirname + "/public"));

app.post('/PostHello',function(request,response){
    let form = new formidable.IncomingForm();
    form.parse(request, function (err, fields){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write("Hello " + fields.benutzername + '!<br/>');
        response.end("Have a POST great day!");
        console.log("Handled request from " + fields.benutzername);
    });
});

app.get('/SubmitHello', function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('Hello ' + request.query.benutzername + '! <br/>' );
    response.end('Have a great day!');
    console.log("Handled request from " + request.query.benutzername);
});

app.get('/',function (request, response){
    //response basteln und senden
    response.send("Hello FIU");
});

app.get('/bla',function (request, response){
    //response basteln und senden
    response.send("Hello Bla");
});

var port = 8080;
app.listen(port);
console.log("Listening on port: " + port);