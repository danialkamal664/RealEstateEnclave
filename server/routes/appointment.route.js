import express from "express";
import { book, deleteAppointment, getAppointments } from "../controller/appointment.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post('/book', book);
router.post('/delete', deleteAppointment);
router.post('/get', getAppointments);

export default router;