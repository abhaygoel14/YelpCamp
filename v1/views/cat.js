var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/cat_app");
var catSchema= new mongoose.Schema({
name:String,
age:Number,
temperament:String
});
var Cat=mongoose.model("Cat",catSchema);
//var george=new Cat({
//     name:"Morris",
//     age:18,
//     temperament:"Evil"
//});
//george.save(function(err,cat){
//    if(err){
//        console.log("Something went wrong!!");
//    } 
//    else{
//        console.log("We just save cat to the DB:");
//        console.log(cat);
//    }
//});
Cat.create({
    name:"Snow White",
    age:15,
    temperament:"God"
},function(err,cat){
    if(err){
        console.log(err);
    }
    else{
        console.log(cat);
    }
});
Cat.find({},function(err,cats){
    if(err){
        console.log("OH NO,ERROR:");
        console.log(err);
    }else{
        console.log("All the Cats....");
        console.log(cats);
    }
})
