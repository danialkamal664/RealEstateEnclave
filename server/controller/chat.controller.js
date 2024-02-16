import Chat from "../models/chat.model.js";
import Plot from "../models/plot.model.js";
import User from "../models/user.model.js";

export const createConversation = async (req, res) => {
    const newChat = new Chat({
        senderEmail: req.body.sender,
        receiverEmail: req.body.receiver,
        message: req.body.message,
        time: req.body.time

    })
    try {
        const savedChat = await newChat.save();
        res.status(200).send(savedChat);

    } catch (error) {
        res.status(400).send(error.response);
    }
}

export const getConversations = async (req, res) => {
    try {
        const conversations = await Chat.find({
            $or: [
                { senderEmail: req.body.email },
                { receiverEmail: req.body.email },
            ]
        });
        console.log(req.body.email)
        res.status(200).send(conversations);

    } catch (error) {
        res.status(400).send(error.response);
    }
}
