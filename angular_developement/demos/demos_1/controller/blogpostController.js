const express =require('express');
var router = express.Router();
var {public_post} = require('../models/public_post');
const jwt=require('jsonwebtoken');
    router.post('/',(req,res)=>{
        var blog_record= new public_post({
            blog_title:req.body.title,
            blog_content:req.body.content,
           });
           blog_record.save((err,doc)=>{
            if(!err)
            {
                 let myobj={"post_created":true};
                 res.status(200).send(myobj);
            }
            else
            { 
                 let myobj={"post_created":false};
                 res.status(200).send(myobj);
            }
        
            });
        
    });
module.exports=router;



