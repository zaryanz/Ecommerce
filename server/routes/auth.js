const Router = require("express");
const router = Router();
const { check, validationResult } = require("express-validator");

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log({ erorrs: errors.array() });
      res.status(422).send({ errors: errors.array() });
      return;
    }
    res.json({ message: "No errors" });
  }
);

module.exports = router;
