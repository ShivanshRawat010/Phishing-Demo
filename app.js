const express = require('express');
const app = express();

const userModel = require('./models/details'); 
const { model } = require('mongoose');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("index")
})

app.get("/form", function(req, res){
  res.render("form")
})

app.post("/submit", async function(req,res){
  let user = await userModel.create({
    email : req.body.email,
    password : req.body.password
  })

  res.redirect("/")
})

app.listen(3000, function(){
  console.log("Server started at port 3000");
})