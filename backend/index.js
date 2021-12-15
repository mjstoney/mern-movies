const express = require("express");
const session = require("express-session");
require("dotenv").config();
const db = require("./controllers/mongodb");
const app = express();

const user = require("./models/User");
const auth = require("./routes/auth");

app.set("view engine", "ejs");
app.use(express.static("views"));
app.use("/auth", auth);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
    },
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(1337, () => console.log("Server running on http://localhost:1337"));
