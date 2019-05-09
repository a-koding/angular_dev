const express =require('express');
var router = express.Router();
var {public_post} = require('../models/public_post');
const jwt=require('jsonwebtoken');
    router.get('/',(req,res)=>{
        public_post.find({}, function(err, public_post) {
            var allpost = [];
        
            public_post.forEach(function(post) {
                allpost.push(post);
            });
        
            res.send({"data":allpost});  
          });
        
    });
module.exports=router;



