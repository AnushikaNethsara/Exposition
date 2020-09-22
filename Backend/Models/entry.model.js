const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define collection for product
let Entry = new Schema(
  {
    nic: {
      unique:true,
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    nameI: {
      type: String,
      required: true,
    },
    email: {
      unique:true,
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    uni: {
      type: String,
      required: true,
    },

    fac: {
      type: String,
      required: true,
    },

    dept: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      
    },
    
  },
  {
    timestamps:true,
    collection: "Entry",
  }
);

module.exports = mongoose.model("Entry", Entry);
