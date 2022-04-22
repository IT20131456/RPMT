const express = require('express');
const res = require('express/lib/response');
const Posts = require('../models/model');
const router = express.Router();

//save posts

router.post('/post/save',(req,res)=>{
    let newPost = new Posts(req.body);

    newPost.save((err)=>{
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

//get posts

router.get('/posts',(req,res) =>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});


//get a specipic post
router.get("/post/:id",(req,res) =>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});


//update post
router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update Successfully"
            });
        }
    );
});


//delete post

router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err) return res.status(400).json({
            message:"Deleted unsuccesful",err
        });

        return res.json({
            message:"Deleted Succesfull",deletedPost
        });

    });
});



module.exports = router;