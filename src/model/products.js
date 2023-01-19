const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("mongoose-unique-validator");
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  unit_of_measurement: {
    type: String,
    required: true,
  },
});
productSchema.plugin(validator);
const products = mongoose.model("product", productSchema);
module.exports = { products };
