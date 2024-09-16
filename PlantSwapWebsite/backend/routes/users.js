const router = require("express").Router();
const User = require("../models/User");
//CRUD

//user update
router.put("/:id", async(req,res) => {
  if(req.body.userId ===req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("User information has been updated")
    }catch(err){
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only update your information when you have your account")
  }
})
//user delete
router.delete("/:id", async(req,res) => {
  if(req.body.userId ===req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id
      );
      res.status(200).json("User information has been deleted")
    }catch(err){
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only delete information when you have your account")
  }
})
//user Read
//router.get("/:id", async(req,res) => {

   {/*} try {
      const user = await User.findById(req.params.id);
      const { password, updatedAt, ...other} = user._doc;
      res.status(200).json(other);
    }catch(err){
      return res.status(500).json(err);
    }
});*/}


router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId 
      ? await User.findById(userId) 
      : await User.findOne({ username: username });

    if (!user) {
      return res.status(404).json({ message: "not found user" });
    }

    const { password, updatedAt, ...other } = user._doc;
    return res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }   
});







module.exports = router;