const express =require('express');
var router = express.Router();
var {res_users} = require('../models/res_users');
var CryptoJS = require("crypto-js");

router.post('/',(req,res)=>{
     console.log("post");
    var user_record= new res_users({
        name:req.body.name,
        email:req.body.email,
        password :CryptoJS.AES.encrypt(req.body.password, '748c0c2b79830aa46c2758af704c8ae5a4868bc2'),
        });
        let query={'email':req.body.email};
        res_users.findOne(query,['_id'],(err,docs)=>
        {  
             console.log("print");
               if(!err)
               {
                user_record.save((err,doc)=>{
                    if(!err)
                    {
                         let myobj={"existing_user":false};
                         res.status(200).send(myobj);
                    }
                    else
                    { 
                         let myobj={"existing_user":true};
                         res.status(200).send(myobj);
                    }
                
                    });
               }
        });





        
});

module.exports=router;



