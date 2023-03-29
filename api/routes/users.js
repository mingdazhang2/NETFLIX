const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");
//Update
router.put("/:id", verify, async (req, res) => {
  console.log(req.user);
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only update your accont!");
  }
});
//Delete
router.delete("/:id", verify, async (req, res) => {
  console.log(req.user);
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only delete your accont!");
  }
});
//Get
router.get("/find/:id", verify, async (req, res) => {
  console.log("req.user", req.user);
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...info } = user._doc;
      res.status(200).json(info);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only view your accont!");
  }
});
//Get all
router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  console.log("req.query", req.query);
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(1)
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to see all users!");
  }
});
//Get user states
router.get("/stats", verify, async (req, res) => {
  console.log(req.user);
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only delete your accont!");
  }
});
module.exports = router;
