// set up
var express=require('express');
var app=express();//create app
var morgan = require('morgan') //logging requests
var bodyParser=require('body-parser');
var port = process.env.PORT || 8080; //set the port
var pg =require('pg');
var database = require('../server/lib/database'); 			// load the database config
// Configuration
app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// routes
require('../server/lib/routes.js')(app);

//listen
app.listen(port, function () {
  console.log('yourSite listening on port'+port+'!')
})

//liniks
//https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
//https://github.com/sfdcmahi/postgres-express-node-tutorial
