var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo",{ useNewUrlParser: true });
//USER-email,name
var userSchema=new mongoose.Schema({
    email:String,
    name:String
});
var User=mongoose.model("User",userSchema);
//Post-title,content
var postSchema=new mongoose.Schema({
    title:String,
    content:String
});
var Post=mongoose.model("User",postSchema);
//var newUser=new User({
   // email:"abhay.goel14@gmail.com",
    // name:"Abhay"
//});
//newUser.save(function(err,user){
   // if(err){
     //   console.log(err);
    //}
    //else{
      //  console.log(user);
   // }
//});
var newPost=new Post({
    title:"HEllo evryone",
    content:"ndjkshfm.sfmsfn,fnsf"
});
newPost.save(function(err,post){
    if(err){
        console.log(err);
    }
    else{
        console.log(post);
    }
});