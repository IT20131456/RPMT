const express = require('express');
const res = require('express/lib/response');
const Evaluations = require('../models/evaluation');
const router = express.Router();





//save evaluation

router.post('/evaluation/save',(req,res)=>{
    let newEvaluation = new Evaluations(req.body);

    newEvaluation.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved Succefully"
        });
    });
});

//get evaluation

router.get('/evaluations',(req,res) =>{
    Evaluations.find().exec((err,evaluations)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEvaluations:evaluations
        });
    });
});


//get a specipic evaluation
router.get("/evaluation/:id",(req,res) =>{
    let evaluationId = req.params.id;

    Evaluations.findById(evaluationId,(err,evaluation)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            evaluation
        });
    });
});


//update  evaluation
router.put('/evaluation/update/:id',(req,res)=>{
    Evaluations.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,evaluation)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update Successfully"
            });
        }
    );
});


//delete evaluation

router.delete('/evaluation/delete/:id',(req,res)=>{
    Evaluations.findByIdAndRemove(req.params.id).exec((err,deletedEvaluation)=>{
        if(err) return res.status(400).json({
            message:"Deleted unsuccesful",err
        });

        return res.json({
            message:"Deleted Succesfull",deletedEvaluation
        });

    });
});



module.exports = router;