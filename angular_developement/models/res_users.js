const mongoose=require('mongoose');
const Group = require('../models/res_group');
Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const res_userSchema = mongoose.Schema({
      name: String,
      email: String,
      pasword: String,
      temp_token:String,
      group : { type: Schema.Types.ObjectId, ref: 'Group' }
  });
var res_users = mongoose.model('res_users',{
    name:{type:String,  required: true},
    email:{type:String, unique: true, required: true},
    password:{type:String, required: true},
    temp_token:{type:String},
});
module.exports = {
    res_users
};