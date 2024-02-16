import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    senderEmail: {
        type: String,
        required: true,
    },
    receiverEmail: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Chat = mongoose.model('Chat', ChatSchema);
export default Chat;
