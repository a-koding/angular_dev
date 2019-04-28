const mongoose=require('mongoose');
Schema = mongoose.Schema;

const res_groupSchema= mongoose.Schema({
    group_name: String,
    write: Boolean,
    read: Boolean,
    create: Boolean,
    update: Boolean,
  });
var res_group = mongoose.model('res_group',{
    name:{type:String},
    write:{type:Boolean},
    read:{type:Boolean},
    create:{type:Boolean},
    update: {type:Boolean},
});
module.exports = {
    res_group
};