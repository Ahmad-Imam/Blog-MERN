const router = require("express").Router();
const User = require("../models/User");
const { encryptText, decryptText } = require("../encryption");

//register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hiddenPass = await encryptText(password);

    const newUser = new User({
      username,
      email,
      password: hiddenPass,
    });
    // console.log(newUser);
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username });

    !user && res.status(400).json("No user found");

    const validated = await decryptText(req.body.password, user.password);

    !validated && res.status(400).json("Wrong password!");

    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (err) {
    // res.status(500).json(err);
  }
});

module.exports = router;
