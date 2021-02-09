var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp_camp",{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
//SCHEMA SETUP
var campgroundSchema=new mongoose.Schema({
    name:String,
    image:String,
    description:String
});
var Campground=mongoose.model("Campground",campgroundSchema);
//Campground.create({
 //   name:"Mount Everest", 
 //   image:"https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e507440752c7ad2964bc3_340.jpg",
 //   description:"This is the world largest mountain"
//},function(err,campground){
 //   if(err){
 //       console.log(err);
 //   }else{
 //       console.log("Yes it works!!");
 //       console.log(campground);
 //   }
//}s);
var campground=[
  {name:"Himalaya", 
  image: "https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e507440752d79d3904fc6_340.jpg",
  description : "This is the world largest mountain"}
//     {name:"Mount Everest", image:"https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e507440752d79d3904fc6_340.jpg"},
//     {name:"K7", image:"https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e507440752d79d3904fc6_340.jpg"},
//     {name:"Kampong", image:"https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e507440752d79d3904fc6_340.jpg"},
//    {name:"Himalaya", image: "https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e507440752d79d3904fc6_340.jpg"},
//     {name:"Mount Everest", image:"https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e507440752d79d3904fc6_340.jpg"},
//     {name:"K7", image:"https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e507440752d79d3904fc6_340.jpg"},
//     {name:"Kampong", image:"https://pixabay.com/get/57e8d1454b56ae14f1dc84609620367d1c3ed9e04e507440752d79d3904fc6_340.jpg"}
//
];
app.get("/",function(req,res){
    res.render("camp");
});
app.get("/campground",function(req,res){
    Campground.find({},function(err,allcampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index",{campground:allcampgrounds});
        }
    })
});
//Show all campground :INDEX
app.get("/campground/new",function(req,res){
    res.render("new.ejs");
})
//CREATE ROUTE:ADD NEW CAMPGROUND
app.post("/campground",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var description=req.body.description;
    var newCamp={name:name,image:image,description:description}
    Campground.create(newCamp,function(err,newlycamp){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campground");
        }
    });

});
//NEW:SHOW FORM TO CREATE NEW CAMPGROUND
app.get("/campground/:id",function(req,res){
    Campground.findById(req.params.id,function(err,foundCampground){
        if(err){
            console.log(err);
        }
        else
        {
                res.render("show",{campground:foundCampground});
        }
    })
});
app.listen(3000,function(){
    console.log("Yelcamp server is running..");
});