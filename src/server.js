


var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
    
    res.render("pages/home", {traces:liste});
});

app.get('/niveau1', function(req, res){
    
  res.render("./pages/niveau1", {enrichissement:liste1});
});
app.get('/niveau2', function(req, res){
    
  res.render("pages/niveau2", {enrichissement:liste1});
});
app.get('/niveau4', function(req, res){
    
  res.render("pages/niveau4", {enrichissement:liste1});
});




const port = 5000
var path = require('path');


app.listen(port, () => {
    console.log(`Votre application est sur http://localhost:${port}`)
  })



const streamValues = require('stream-json/streamers/StreamArray');
const fs = require('fs');


var jsonStream = streamValues.withParser();
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);


var i=0;
var liste=[];

jsonStream.on('data', function (obj) {

  liste.push(JSON.stringify(obj));

    if(i>2000){
        jsonStream.destroy();
    }
    i++;
});

jsonStream.on('end', () => {
    console.log('All done');
});

const file1 = path.join(__dirname, 'geoluciole_dataset.json');
fs.createReadStream(file1).pipe(jsonStream.input);



var JS1 = streamValues.withParser();
liste1=[]
var j=0;

JS1.on('data',function (obj) {
  liste1.push(JSON.stringify(obj));
    
    console.log(obj);

});
    
JS1.on('end', () => {
    console.log('All done');
});

//lecture du fichier geojson
const file2 = path.join(__dirname, '82373126.json');
fs.createReadStream(file2).pipe(JS1.input);




