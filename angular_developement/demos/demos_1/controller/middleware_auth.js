const express =require('express');
var router = express.Router();
var {res_users} = require('../models/res_users');
var CryptoJS = require("crypto-js");
const UIDGenerator = require('uid-generator');
const jwt=require('jsonwebtoken');


router.post('/',(req,res)=>{
    console.log("post",req.body.token);
    try{
    const decode=jwt.verify(req.body.token,"748c0c2b79830aa46c2758af704c8ae5a4868bc2");
    res.status(200).json({"status":1});
    }
    catch{
        res.status(200).json({"status":0});

    }
    
});
module.exports=router;