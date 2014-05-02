var express = require ('express')
// NOTE: express4 doesn't include this middleware and it needs npm install'ed middleware
var bodyParser = require('body-parser')

var app = express()

app.use(function (req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*')
	next()
})

app.use(bodyParser())

var messages = [
	{ message: 'Welcome to the Jungle'},
	{ message: 'Goodbye to the Jungle'}
]

//execute function after / (/ is the root path of server)
app.get('/', function (req, res){
	res.json(messages)	
})

app.post('/', function (req, res){
	var message = req.body
	messages.push(message)
	res.json(messages)	
})

app.listen(3000, function(){
	console.log('I am listening...')
})











// var http = require('http') //import the http module

// var messages = [
// 	{ message: 'Welcome to the Jungle'}

// ]

// var onRequest = function(req, res){

// 	if (req.method === 'GET'){
// 		res.writeHead(200, {
// 			'Content-Type': 'application/json', 
// 			'Access-Control-Allow-Origin': '*'
// 		})
// 		res.end(JSON.stringify(messages))
// 	}

// 	else if (req.method == 'POST') {
// 		var postData = ''
// 		req.on('data', function(chunk) {
// 			postData += chunk.toString();
// 		});

// 		req.on('end', function() {

// 			messages.push(JSON.parse(postData))

// 			res.writeHead(201, {
// 				'Content-Type': 'application/json', 
// 				'Access-Control-Allow-Origin': '*'
// 			})
// 			res.end(JSON.stringify(messages))
// 		})
// 	}
// }


// var server = http.createServer(onRequest)

// server.listen(3000)


