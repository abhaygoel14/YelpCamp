var mongoose = require("mongoose");
//Post-title,content
var campgroundSchema=new mongoose.Schema({
    name: String,
    image: String,
    description: String
});
module.exports=mongoose.model("Campground",campgroundSchema);