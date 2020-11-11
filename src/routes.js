
const express = require('express')
const app = express()



app.get('/', function(req, res){
    
    res.render("home", {traces:liste});
});

app.get('/level1', function(req, res){
    
  res.render("level1", {enrichissement:liste1});
});
app.get('/level2', function(req, res){
    
  res.render("level2", {enrichissement:liste1});
});
app.get('/level3', function(req, res){
    
  res.render("level4", {enrichissement:liste1});
});