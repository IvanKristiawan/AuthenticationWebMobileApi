import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000;
// Import Routes
import VerifiedRoute from "./routes/VerifiedRoute.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

const app = express();
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DBConnection Successfull!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
// Use Routes
app.use("/", VerifiedRoute);
app.use("/users", UserRoute);
app.use("/auth", AuthRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
