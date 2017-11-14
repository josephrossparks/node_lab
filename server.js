var http = require("http");
var tasks = require("./TaskList")

function getRandomInt(min, max) {//Nested into combatLoop
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is exclusive and the minimum is inclusive
}

http.createServer(function(request, response) {
  response.writeHead(200, { "Content-type": "text/plain" });

  var i = getRandomInt(0, tasks.length-1);

  response.write(tasks[i]);
  console.log(tasks[i]);

  response.end();
}).listen(8890);

