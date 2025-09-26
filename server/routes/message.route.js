import express from "express";

import { isAuthenticated } from "../middlewares/auth.js";
import { getMessage, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send/:receiverId", isAuthenticated, sendMessage);
router.get("/get-message/:otherParticipantId", isAuthenticated, getMessage);

export default router;
