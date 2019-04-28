const mongoose=require('mongoose');
var Users = mongoose.model('Users',{
    f_name:{type:String},
    password:{type:String},
    l_name:{type:String},
    email_id:{type:String}
    });
module.exports = {
    Users
};
