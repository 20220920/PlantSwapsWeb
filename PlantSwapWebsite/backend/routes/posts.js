const router = require("express").Router();
const Post = require("../models/Post")
const User = require('../models/User')
//post
router.post("/", async (req, res)=> {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        return res.status(200).json(savePost);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//update
router.put("/:id",async(req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId)
        {
            await post.updateOne({
                $set: req.body,
            });
            return res.status(200).json("I succeeded in editing the post")
        }else{
            return res.status(403).json("You can not edit other people's posts")
        }
    } catch (err){
      return res.status(403).json(err);
    }
});
//delete
router.delete("/:id",async(req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId)
        {
            await post.deleteOne();
            return res.status(200).json("Successfully deleted the post")
        }else{
            return res.status(403).json("You can't delete other people's posts")
        }
    } catch (err){
      return res.status(403).json(err);
    }
});

{/*router.get("/:id",async(req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
            return res.status(200).json(post);
    } catch (err){
      return res.status(403).json(err);
    }
});*/}

{/*router.get("/timeline/:userId",async(req, res)=> {
    try{
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id});
        return res.status(200).json(userPosts)
    }catch (err) {
        return res.status(500).json(err);
    }
});*/}
router.get("/posts", async (req, res) => {
    try {
        const allPosts = await Post.find({});
        return res.status(200).json(allPosts);
    } catch (err) {
        return res.status(500).json(err);
    }
});



module.exports = router;