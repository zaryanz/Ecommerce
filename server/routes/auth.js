const Router = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const auth = require("../middleware/auth");

/*
@@ROUTE: GET /routes/user
@@DESC: get user by token 
@@ACCESS: private
*/
router.get("/", auth, (req, res) => {
  res.json({ message: "hello" });
});

/*
@@ROUTE: POST /routes/user
@@DESC: create new user
@@ACCESS: public
*/
router.post(
  "/",
  [
    check("username", "Username must be minimum 5 characters").isLength({
      min: 5,
    }),
    check("email", "Please enter a valid E-mail").isEmail(),
    check("password", "Password must be minimum 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    let errors = validationResult(req);
    const { username, email, password } = req.body;
    if (!errors.isEmpty) {
      console.log({ erorrs: errors.array() });
      res.status(422).send({ errors: errors.array() });
      return;
    }
    let user = await User.findOne({ email });
    let errArr = [];
    if (user) {
      errArr.push("Email is already in use");
    }
    user = await User.findOne({ username });
    if (user) {
      errArr.push("Username is taken");
    }
    if (errArr.length !== 0) {
      console.log(errArr);
      res.status(422).send({ errors: errArr });
      return;
    }
    const salt = await bcrypt.genSalt(10);
    encryptedPass = await bcrypt.hash(password, salt);
    console.log(encryptedPass);
    user = new User({ username, email, password: encryptedPass });
    await user.save();
    console.log("User saved");
    const payload = {
      user: {
        id: user.id,
      },
    };
    const accessToken = jwt.sign(payload, process.env.jwtSecret, {
      expiresIn: 3600,
    });
    res.send(accessToken);
  }
);

module.exports = router;
