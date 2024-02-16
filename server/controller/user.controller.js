import Appointment from "../models/appointment.model.js";
import User from "../models/user.model.js";

export const userData = async (req, res) => {
    try {

        const response = await User.findOne({ email: req.body.email });
        res.send(respones)
    } catch (error) {
        res.status(400).send("Something went wrong!");
    }
}

