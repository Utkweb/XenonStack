const { Schema, model } = require("../connection");

const schema = new Schema({
  name: String,
  email: String,
  message: String,
});

module.exports = model("contacts", schema);