const express = require('express');
const res = require('express/lib/response');
const sdm = require('../models/supervisorDetailsModel');
const router = express.Router();


//save details

router.post('/sdetails/save',(req,res)=>{
    let newDetail = new sdm(req.body);

    newDetail.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Supervisor Details Created Succefully"
        });
    });
});

module.exports = router;