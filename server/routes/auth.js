const Router = require("express");
const router = Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

/*
@@ROUTE: GET /routes/user
@@DESC: get user by token 
@@ACCESS: private
*/
router.get("/", (req, res) => {
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
    if (!errors.isEmpty()) {
      console.log({ erorrs: errors.array() });
      res.status(422).send({ errors: errors.array() });
      return;
    }
    let user = User.find({ email });
    let errArr = [];
    if (user) {
      errArr.push("Email is already in use");
    }
    user = User.find({ username });
    if (user) {
      errArr.push("Username is taken");
    }
    if (!errArr.isEmpty) {
      console.log(errArr);
      res.status(422).send({ errors: errArr });
      return;
    }
    user = new User({ username, email, password });
    await user.save();
    console.log("User saved");
  }
);

module.exports = router;
