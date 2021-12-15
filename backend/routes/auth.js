const express = require("express");
const User = require("../models/User");
const router = express.Router();
const db = require("../models/User");

router.use(express.urlencoded({ extended: true }));

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;
  console.log(req);
  try {
    let result = await db.find({ username });
    console.log(result);
    res.send("ok");
  } catch (err) {
    console.log(err);
  }
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  let { firstname, lastname, username, email, password } = req.body;
  const newUser = new User({
    firstname: firstname,
    lastname: lastname,
    username: username,
    email: email,
    password: password,
  });
  let result = await newUser.save();
  res.send(result);
});

function isAuthenticated(req, res, next) {
  if (!req.session.authenticated) {
    res.redirect("/");
  } else {
    next();
  }
}

module.exports = router;
