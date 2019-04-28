const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/CurdDB',(err)=>{
 if(!err)
 {
console.log("MongoDB connection successed..");
 }
 else{
console.log("Error in connection :"+JSON.stringify(err,undefined,2));

 }
});
module.exports=mongoose;

