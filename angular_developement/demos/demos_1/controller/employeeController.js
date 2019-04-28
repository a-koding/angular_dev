const express =require('express');
var router = express.Router();
var {Employee} = require('../models/employee');
var ObjectId = require('mongoose').Types.ObjectId;
var CryptoJS = require("crypto-js");
router.post('/',(req,res)=>{
    var emp= new Employee({
        name:req.body.name,
        position:req.body.position,
        office : req.body.office,
        });
    emp.save((err,doc)=>{
            if(!err)
        
            {
                res.send(doc);
                console.log("posted");
            }
            else
            { console.log("Error in posting:"+JSON.stringify(err,undefined,2));
        }
        });
    
});
router.get('/get_emp/:id',(req,res)=>{
if(!ObjectId.isValid(req.params.id))
{

    return res.status(400).send("No record found for the user");
}
else{

    Employee.findById(req.params.id,(err,doc)=>
    {
if(!err)
{
    res.send(doc);
    console.log(doc,"document");
}
else{
    console.log("error in retriving data");
}
    });
}    
});




module.exports=router;



