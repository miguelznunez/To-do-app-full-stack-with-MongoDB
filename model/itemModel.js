const mongoose = require("mongoose")

const itemSchema = {
  name: String,
  cart: Boolean,
}

module.exports = mongoose.model("Item", itemSchema)