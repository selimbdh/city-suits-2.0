const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var productSchema = mongoose.Schema({
  articleName: { type: String, require: true },
  articleType: { type: String, enum: ["suits","shirts", "pants", "blazers", "outerweare", "accessories","shoes"] },
  description: { type: String, require: true },
  availableSizes: { type: String, enum:["XS","S","M","L","XL","XXL"]},
  price: { type: Number, require: true },
  articleImage:{type:String, require:true}
});

module.exports = mongoose.model("products", productSchema);
