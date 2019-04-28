const express =require('express');
var router = express.Router();
var {Users} = require('../models/users');


router.get('/get_users',(req,res)=>{
// Users.find({'f_name':{$regex: '.*akeys.*'}},'email_id password ',(err,docs)=>
// {
// if(!err)
// {
//     res.send(docs);
// }
// else{

//     console.log("Error in retriving users");
// }
// });
var query={'f_name':'akeys'};
var update={'f_name':'joyal'};
Users.findOneAndUpdate(query,update,(err,docs)=>
{
if(!err)
{
    res.send(docs);
}
else{

    console.log("Error in reteriving users");
}
});



});
router.post('/create_users',(req,res)=>{    
    
var user = new Users({
    f_name:req.body.f_name,
    password:req.body.password,
    l_name : req.body.l_name,
    email_id : req.body.email_id,
    });
user.save((err,doc)=>{
    if(!err)
    {
        res.send(doc);
    }
    else
    { 
        console.log("Error in creating user:"+JSON.stringify(err,undefined,2));
}

});
});
module.exports=router;



