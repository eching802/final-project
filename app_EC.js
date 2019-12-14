// Eric Ching
var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var path = require('path');

let rawdata = fs.readFileSync('./api/courses.json');
let courses = JSON.parse(rawdata);

app.use('/api', express.static('api'));
app.use('/styles', express.static('styles'));
app.use('/images', express.static('images'));

app.get('/', function(request, response){
    response.sendFile(__dirname +'/index.html');
});

app.get('/courses', function(req,res){

res.json(courses)
console.log(courses);
})

app.get('/courses/cus', function(req,res){

res.json(courses["Computer_Science"])
console.log(courses["Computer_Science"]);
})

app.get('/courses/css', function(req,res){

res.json(courses["Computer_Security_System"])
console.log(courses["Computer_Security_System"]);
})

app.get('/courses/it', function(req,res){

res.json(courses["Information_Technology"])
console.log(courses["Information_Technology"]);
})

app.get('/courses/net', function(req,res){

res.json(courses["Networking"])
console.log(courses["Networking"]);
})

app.get('/courses/hci', function(req,res){

res.json(courses["Healthcare_informatics"])
console.log(courses["Healthcare_informatics"]);
})

app.get('/courses/mth', function(req,res){

res.json(courses["Mathmatics"])
console.log(courses["Mathmatics"]);
})

var server= app.listen(3000,function(){
  console.log('app listening on port 3000')
  //use node api.js and localhot:127.0

});
