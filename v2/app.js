var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var Campgorund=require("./models/campground");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
//SCHEMA SETUP

var campground=[


 ];
app.get("/",function(req,res){
    res.render("camp");
});
app.get("/campground",function(req,res){
             res.render("campground",{campground:campground});
        
});
app.get("/campground/new",function(req,res){
    res.render("new.ejs");
})
app.post("/campground",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var newCamp={name:name,image:image}
    campground.push(newCamp);
    res.redirect("/campground");

});
app.listen(5000,function(){
    console.log("Yelcamp server is running..");
});