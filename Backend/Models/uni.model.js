const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define collection for product
let Uni = new Schema(
  {
    name: {
      unique:true,
      type: String,
      required: true,
    },
    
  },
  {
    timestamps:true,
    collection: "Uni",
  }
);

module.exports = mongoose.model("Uni", Uni);
