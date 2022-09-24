const mongoose = require("mongoose")

const itemSchema = {
  item: String,
  check: Boolean,
}

module.exports = mongoose.model("Item", itemSchema)