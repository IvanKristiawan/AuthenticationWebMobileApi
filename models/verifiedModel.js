import mongoose from "mongoose";

const VerifiedSchema = new mongoose.Schema({
  title: String,
});

export default mongoose.model("Verified", VerifiedSchema);
