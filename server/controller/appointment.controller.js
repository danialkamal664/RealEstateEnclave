import Appointment from "../models/appointment.model.js";
import User from "../models/user.model.js";

export const book = async (req, res) => {
    try {
        const newAppointment = new Appointment({
            date: req.body.date,
            time: req.body.time,
            contact: req.body.contact,
            buyer: req.body.buyer,
            seller: req.body.seller

        })

        await newAppointment.save();

        const appointments = await Appointment.find({ buyer: req.body.buyer });
        res.send(appointments)
    } catch (error) {
        res.status(400).send(error.response);
    }
}

export const deleteAppointment = async (req, res) => {
    try {
        await Appointment.deleteOne({ id: req.body._id });
        res.send('deleted');
    } catch (error) {
        res.status(400).send(error.response);
    }
}

export const getAppointments = async (req, res) => {
    console.log(req.body);
    try {
        const response = await Appointment.find({
            $or: [
                { buyer: req.body.email },
                { seller: req.body.email },
            ]
        });

        res.send(response);
    } catch (error) {
        res.status(400).send(error.response);
    }
}

