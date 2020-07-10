var http = require("http");
var url = require("url");
var querystring = require("querystring");
//var server = http.createServer();
var port = process.env.PORT || 3000;

  http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
      console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      try{
        const obj = JSON.parse(body);
	let currdate = new Date();
	let date_text = "Request received date and time: " + currdate.getDate() + "/" + currdate.getMonth() + "/" + currdate.getFullYear() + " -- " + currdate.getHours() + ":" + currdate.getMinutes() + ":" + currdate.getSeconds() + "s"
        console.log(date_text);
        console.log("This is the request: "+body);
        response.writeHead(200, {
          "Content-Type": "text/plain"
        });
        response.end();
      }
      catch(e){
        console.log("Begin - BAD JSON Format.");
        console.log(" ");
        console.log(" ");
        console.log(" ");
        console.log(" ");
        console.log("End - BAD JSON Format.");
        response.writeHead(400, {
          "Content-Type": "text/plain"
        });
        response.end();
      }
      
      
      /*var uri = url.parse(request.url);
      var qs = uri.query ? querystring.parse(uri.query) : {};
      var status = qs.status || 200;*/
      
      // At this point, we have the headers, method, url and body, and can now
      // do whatever we need to in order to respond to this request.
    });
  }).listen(port, function () {
    console.log("listening on port " + port);
  });
  /*function (request, response) {
  var uri = url.parse(request.url);
  var qs = uri.query ? querystring.parse(uri.query) : {};

  var status = qs.status || 200;
  var contentType = qs.contentType || "text/plain";
  var body = qs.body || "hello there!";

  response.writeHead(status, {
    "Content-Type": contentType,
    "Content-Length": body.length
  });*/

  /*console.log(uri.pathname + " - HTTP " + status + " (" + contentType + "): " + body);

  response.end(body);
});*/

//server.listen(port, function () {
//  console.log("listening on port " + port);
//})
