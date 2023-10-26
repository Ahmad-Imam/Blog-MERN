const router = require("express").Router();
const Post = require("../models/Post");

//create post
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();

    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all posts
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts = [];
    if (username) {
      console.log("user");
      posts = await Post.find({ username });
    } else if (catName) {
      console.log("cat");
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else if (!username && !catName) {
      console.log("user cat");
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("not your post not yours to edit");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        // console.log(post);
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post gone!!");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("not your post not yours to delete");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
