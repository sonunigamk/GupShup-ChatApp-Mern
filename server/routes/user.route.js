import express from "express";
import {
  register,
  login,
  getProfile,
  logout,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", isAuthenticated, logout);
router.get("/get-profile", isAuthenticated, getProfile);

export default router;
