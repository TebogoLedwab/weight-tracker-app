const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Weight = require("../Models/weightSchema");

//@route POST
//@desc: Adding a new weight entry
router.post("/weight_entry", async (req, res) => {
  const { weight, date } = req.body;

  try {
    //add new weight entry
    const newWeight = new Weight({
      _id: mongoose.Types.ObjectId(),
      weight: weight,
      date: date,
    });

    newWeight.save((err) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(201).json({
          message: "Weight sucessfulyy saved",
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save weight",
      err: error,
    });
  }
});

//GET route
//A route to get all weight history
router.get("/get_all_weight", (req, res) => {
  Weight.find()
  .exec()
  .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({
          error: err
      });
  });
});

module.exports = router;
