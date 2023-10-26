const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const { encryptText, decryptText } = require("../encryption");

//update
router.put("/:id", async (req, res) => {
  const { userId } = req.body;
  if (userId === req.params.id) {
    if (req.body.password) {
      req.body.password = await encryptText(req.body.password);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update your account. Duh!");
  }
});

//delete
router.delete("/:id", async (req, res) => {
  const { userId } = req.body;
  if (userId === req.params.id) {
    try {
      const user = await User.findById(userId);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(userId);
        res.status(200).json("You deleted yourself !!");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found");
    }
  } else {
    res.status(401).json("You can only delete your account. Duh!");
  }
});

//get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (err) {
    res.status(404).json("User not found");
  }
});

module.exports = router;
