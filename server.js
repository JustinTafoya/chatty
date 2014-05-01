var http = require('http') //import the http module

var messages = [
	{ message: 'Welcome to the Jungle'}

]

var onRequest = function(req, res){

	if (req.method === 'GET'){
		res.writeHead(200, {
			'Content-Type': 'application/json', 
			'Access-Control-Allow-Origin': '*'
		})
		res.end(JSON.stringify(messages))
	}

	else if (req.method == 'POST') {
		var postData = ''
		req.on('data', function(chunk) {
			postData += chunk.toString();
		});

		req.on('end', function() {

			messages.push(JSON.parse(postData))

			res.writeHead(201, {
				'Content-Type': 'application/json', 
				'Access-Control-Allow-Origin': '*'
			})
			res.end(JSON.stringify(messages))
		})
	}
}


var server = http.createServer(onRequest)

server.listen(3000)



// var server = http.createServer(function(req, res){

// 	console.log(req.method)
// 	console.log('serving...')

 // http.createServer(function(request, response) {
 //  if (request.method == 'POST') {
 //   var postData = '';
 //   request.on('data', function(chunk) {
 //    postData += chunk.toString();
 //   });
 //   request.on('end', function() {
 //    console.log("Got POST data:");
 //    console.log(JSON.parse(postData));
 //   });
 //  }
 // }