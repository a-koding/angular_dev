const express =require('express');
var router = express.Router();
var {res_users} = require('../models/res_users');
var CryptoJS = require("crypto-js");
const UIDGenerator = require('uid-generator');
router.post('/',(req,res)=>{
var query={'email':req.body.email};
res_users.findOne(query,['_id','password'],(err,docs)=>
{
if(!err)
{
    if(CryptoJS.AES.decrypt((docs.password).toString(), '748c0c2b79830aa46c2758af704c8ae5a4868bc2').toString(CryptoJS.enc.Utf8) == req.body.password)    
        {
            
            const uidgen = new UIDGenerator(UIDGenerator.BASE16);
            const uid = uidgen.generateSync();
            console.log(uid);
            res_users.findOneAndUpdate({ _id: docs._id },{temp_token:uid},err,doc=>{
                if(!err)
                {
                let myobj={"valid_user":true,"token":uid};
                res.status(200).send(myobj);

                }
                else{

                    console.log("Error in creating token"+JSON.stringify(err,undefined,2));
                }
            });

        }
    else{
             let myobj={"valid_user":false};
             res.status(200).send(myobj);
    }
}
else    {
              let myobj={"valid_user":false};
              res.status(200).send(myobj);
        }
});
});


router.get('/get_users',(req,res)=>{
    res_users.find({'name':{$regex: '.*.*'}},'name email',(err,docs)=>
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

module.exports=router;



