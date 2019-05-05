const express =require('express');
var router = express.Router();
var {res_users} = require('../models/res_users');
var CryptoJS = require("crypto-js");
const UIDGenerator = require('uid-generator');
const jwt=require('jsonwebtoken');
router.post('/',(req,res)=>{
var query={'email':req.body.email};
console.log(req.body.email,req.body.password);

res_users.findOne(query,['_id','password'],(err,docs)=>
{
if(!err)
{
    if(CryptoJS.AES.decrypt((docs.password).toString(), '748c0c2b79830aa46c2758af704c8ae5a4868bc2').toString(CryptoJS.enc.Utf8) == req.body.password)    
        {
            
            const uidgen = new UIDGenerator(UIDGenerator.BASE16);
            uid="asdasd";
            res_users.findOneAndUpdate({ _id: docs._id },{temp_token:uid},err,doc=>{
                if(!err)
                {
                    var tokens=jwt.sign({
                        myval:"secret",
                    },'748c0c2b79830aa46c2758af704c8ae5a4868bc2',{expiresIn:'1h'});
                let myobj={"valid_user":true,"token":tokens};
                res.status(200).send(myobj);

                console.log("jwt token",tokens)
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


    router.post('/validate_me',(req,res)=>{
        console.log("post",req.body.token);
        try{
        const decode=jwt.verify(req.body.token,"748c0c2b79830aa46c2758af704c8ae5a4868bc2");
        res.status(200).json({"value":"posted"});
        }
        catch{
            res.status(401).json({"status":"token expired"});

        }
        
    });
module.exports=router;



