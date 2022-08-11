import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DBConnection Successfull!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
