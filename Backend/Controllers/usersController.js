const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Users = require("../Models/usersSchema");

//@route POST
//@desc: Registering new users
router.post("/register_users", async (req, res) => {
  //get user data from frontend
  const { name, surname, email, password } = req.body;

  try {
    //register new user
    const newUser = new Users({
      _id: mongoose.Types.ObjectId(),
      name: name,
      surname: surname,
      email: email,
      password: password,
    });

    //check if user already exists
    userFound = await Users.findOne({ email: email });
    if (userFound) {
      return res.status(201).json({
        message: "Registration failed, user already exists.",
      });
    } else {
      //save new user
      newUser.save((err) => {
        if (err) {
          return console.log(err);
        } else {
          res.status(201).json({
            message: "Successfully registered, Please sign in.",
          });
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to save new user",
      err: error,
    });
  }
});

//Sign In
//Validating user data from the frontend
router.post("/login_users", async (req, res) => {
  Users.find({ email: req.body.email, password: req.body.password })
  .select(' _id name surname email age weight')
    .exec()
    .then((users) => {
      if (users.length < 1) {
        return res.json({
          message: "Login error! Please check your credentials",
        });
      } else {
        return res.json({
          message: "Logged In Successfully!",
          users: users,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error: err,
      });
    });
});


module.exports = router;
