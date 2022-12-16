const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var userSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  pwd: { type: String, require: true },
  phone: { type: String, require: true, min: 8 },
  role: { type: String, default: "USER", enum: ["USER", "ADMIN"] },
});

module.exports = mongoose.model("users", userSchema);
