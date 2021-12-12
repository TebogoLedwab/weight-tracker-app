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
      id: mongoose.Types.ObjectId(),
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

//getting weight entry by id
// router.get("/get_weight/:weightId", (req, res) => {
//     Weight.find ({ _id: req.params.userId })
//     .select('_id weight date')
//     .exec()
//     .then((doc) => {
//         console.log("From database", doc);
//         if(doc) {
//             res.status(200).json({
//                 entry: doc,
//             });
//         } else if(!_id) {
//             res.status(404).json({message: "Weight entry does not exist!"})
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json({
//             message: "Weight entry does not exist",
//             error: err
//         });
//     });
// });

//PATCH Route
//Updating weight entry
router.patch("/update_weight/:id", async (req, res )=>{
try{
    const entry = await Weight.findOne({ id: req.params.id });
    if(req.body.weight) {
        entry.weight  = req.body.weight;
    }
    if(req.body.date) {
        entry.date  = req.body.date;
    }

    await entry.save();
    return res.send({
        message: "Weight successfully updated!",
        entry
    });
} catch {
    return res.status(404).send({ error: "Weight entry does not exist!"})
}

});

//DELETE
//Deleting a weight entry
router.delete('/remove_weight/:id', (req, res) =>{
  Weight.findByIdAndDelete(req.params.id).then((weight)=> {
    if(!weight) {
      return res.status(404).send({
        error: "Successfully deleted weight entry"
      });
    }
    res.send(weight)
  }). catch ((error) =>{
    res.status(500).json(error);
  })
} )

module.exports = router;
