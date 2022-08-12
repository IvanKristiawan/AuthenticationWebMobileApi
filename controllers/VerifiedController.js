import Verified from "../models/verifiedModel.js";

export const getVerified = async (req, res) => {
  try {
    const verified = await Verified.find();
    res.json(verified);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const createVerified = async (req, res) => {
  const newVerified = new Verified(req.body);
  try {
    const insertedVerified = await newVerified.save();
    // Status 201 = Created
    res.status(201).json(insertedVerified);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
