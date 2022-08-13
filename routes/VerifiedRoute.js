import express from "express";
import {
  getVerified,
  createVerified,
} from "../controllers/VerifiedController.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/verified", verifyUser, getVerified);
router.post("/verified", createVerified);

export default router;
