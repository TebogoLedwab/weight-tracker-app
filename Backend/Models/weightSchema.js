const mongoose = require("mongoose");

//A schema that accomodated weight
const weightSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  weight: {
    type: String,
    required: [true, "This field is required"],
  },
  date: { 
    type: Date, default: Date.now
 },
});

module.exports = mongoose.model('Weight', weightSchema)
