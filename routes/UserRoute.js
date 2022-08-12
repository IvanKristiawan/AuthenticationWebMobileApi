import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/UserController.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// UPDATE
router.put("/:id/:token", verifyUser, updateUser);
// DELETE
router.delete("/:id/:token", verifyUser, deleteUser);
// GET
router.get("/:id/:token", verifyUser, getUser);
// GET ALL
router.get("/", getUsers);

export default router;
