const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encript = require("mongoose-encryption");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const secret = "secretforencription";
userSchema.plugin(encript, { secret: secret });
const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/logout", function (req, res) {
  res.redirect("/");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", function (req, res) {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password,
  });
  newUser.save();
  res.render("secrets");
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ email: username })
    .then((user) => {
      if (user.password === password) {
        res.render("secrets");
      } else {
        console.log("Password is incorrect.");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
