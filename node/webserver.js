let http = require('http');
let server = http.createServer(anfrage);
let urlModul = require('url');

function anfrage(request,response){
    let url_parts = urlModul.parse(request.url,true);
    let vorname = url_parts.query.vorname;
    
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('Hello ' + vorname + ' from Node.js!\n');
    
    console.log('Handled request from ' + vorname);
}

server.listen(8080,'localhost');
console.log("Server running at http://localhost:8080/");

/*
http:
Header,Payload

Status:
1xx - Information
2xx - Alles gut :-)
3xx - Umleitung
4xx - Client-Fehler
5xx - Server-Fehler
*/

// JS-Object Literal-Pattern
// let JS_ObjektVariable = {'Vorname': 'Michael', 'Gehalt' : 100, 'Trainer' : true};
// console.log("Ojekteigenschaft Vorname: " + JS_ObjektVariable.Vorname);
// console.log("Ojekteigenschaft Gehalt: " + JS_ObjektVariable.Gehalt);
// console.log("Ojekteigenschaft Trainer: " + JS_ObjektVariable.Trainer);

// JS_ObjektVariable.Vorname = "Susi";
// console.log("Objekteigenschaft Vorname: " + JS_ObjektVariable.Vorname);


// URL:
// http://hostname:port/root/pfad1/pfad2/datei.endung?vorname=susi&nachname=sorglos