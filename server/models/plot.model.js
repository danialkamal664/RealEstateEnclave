import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PlotSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    soldBy: {
        type: String,
        required: true,
    },
    area: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
}, {
    timestamps: true
});

const Plot = mongoose.model('Plot', PlotSchema);
export default Plot;
