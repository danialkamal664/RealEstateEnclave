import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { sellPlot, getPlots, buyPlot } from "../controller/plot.controller.js";

const router = express.Router();

router.post('/sell', verifyToken, sellPlot);
router.post('/display', getPlots);
router.post('/buy', buyPlot);
// router.post('/login', login);
// router.post('/logout', verifyToken, logout);

export default router;