import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    buyer: {
        type: String,
        required: true
    },
    seller: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);
export default Appointment;
