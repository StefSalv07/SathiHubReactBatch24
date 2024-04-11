const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
  {
    pName: {
      type: String,
      required: true,
      trim: true,
    },
    pDetails: {
      type: String,
      required: true,
      trim: true,
    },
    pPrice: {
      type: Number,
      required: true,
      trim: true,
    },
    pQty: { 
      type: Number,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    // productImage:{
    //     type: String,
    //     required: true
    // }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", ProductSchema);
