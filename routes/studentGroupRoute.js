const express = require('express');
const res = require('express/lib/response');
const sgm = require('../models/studentGroupModel');
const router = express.Router();


//save details

router.post('/sgroup/save',(req,res)=>{
    let newGroup = new sgm(req.body);

    newGroup.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Group Created Succefully"
        });
    });
});

module.exports = router;