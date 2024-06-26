const mongoose = require("mongoose");

const clientModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    project: {
      type: String,
    },
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientModel);

module.exports = Client;
