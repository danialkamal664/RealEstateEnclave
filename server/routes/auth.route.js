import express from "express";
import { registor, login, logout, twoFactor } from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post('/registor', registor);
router.post('/login', login);
router.post('/logout', logout);
router.post('/twofactor', twoFactor);

export default router;