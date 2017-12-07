// How to use this CodePen:
// 1. Get started with Box Platform and create an application: https://developer.box.com/docs/getting-started-box-platform

// 2. Generate an access token using an SDK or use a developer token from https://app.box.com/developers/console/ -> your application -> configuration in the left sidebar -> Generate Developer Token. See https://developer.box.com/docs/special-scopes-for-box-ui-elements for various scopes you can use for the explorer.

// 3. Whitelist 'http://s.codepen.io' and 'https://s.codepen.io' in your CORS allowed origins in https://app.box.com/developers/console/ -> your application -> configuration in the left sidebar -> CORS Domains

// 4. Choose a folder ID or use '0' for the root folder.

// 5. Enter your access token below, replacing the existing access token. Replace the folder ID with yours from step 4.

/*var ACCESS_TOKEN = 'a1tEvdzhbV74imTSGjEtfzuD8A18LRJs';
var FOLDER_ID = '42697001176';

var contentExplorer = new Box.ContentExplorer();

// Show the content explorer
contentExplorer.show(FOLDER_ID, ACCESS_TOKEN);*/


// var express = require('express');
// var app     = express();
// var fs= require('fs');
// var path =require('path');

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// // start the server
// app.listen(9000);
// console.log('9000 is the magic port!')
var express=require('express');
var path=require('path');
var app=express();
 app.use(express.static(__dirname + '/'));
   // set up our one route to the index.html file
 app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname + '/index.html'));
 });
 app.listen(9000);
 console.log("port is running");
