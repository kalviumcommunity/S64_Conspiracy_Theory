const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  theoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Theory", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Like", LikeSchema);
