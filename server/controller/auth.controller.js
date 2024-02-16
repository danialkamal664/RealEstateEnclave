import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import nodemailer from 'nodemailer'

export const registor = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            balance: 0,
            code: null
        });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'abbasenterprises45@gmail.com',
                pass: 'nqtyhuduqyfvghwo'
            }
        });

        const mailOptions = {
            from: 'abbasenterprises45@gmail.com',
            to: req.body.email,
            subject: 'Abaad Enterprise',
            text: 'You have successfully registered for Abaad enterprises website',
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent' + info.response)
            }
        })

        await newUser.save();

        res.send(newUser);

    } catch (error) {
        res.status(400).send(error.response);
    }
}

export const login = async (req, res) => {
    try {


        console.log(req.body.email);
        const user = await User.findOne({ email: req.body.email });
        console.log(req.body.email);
        if (!user) return res.status(404).send("User not found");
        console.log(req.body.email);

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return res.status(400).send("Incorrect password");

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'abbasenterprises45@gmail.com',
                pass: 'nqtyhuduqyfvghwo'
            }
        });

        const code = Math.floor(Math.random() * (10000 - 8000) + 8000);
        console.log('Code is ' + code);

        const mailOptions = {
            from: 'abbasenterprises45@gmail.com',
            to: req.body.email,
            subject: 'Abaad Enterprise',
            text: 'Your code is ' + code,
        };

        const updatedUser = await User.updateOne({ email: req.body.email }, { $set: { code: code } });
        console.log(updatedUser);

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent' + info.response)
            }
        })

        res.status(200).send('A code is sent to email please enter that to login');

        // const token = jwt.sign({
        //     id: user._id
        // }, "test")

        // const { password, ...info } = user._doc;
        // res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);


    } catch (error) {
        res.status(400).send(error.response);

    }

}

export const twoFactor = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email });

        if (user.code != req.body.code) return res.status(402).send("Incorrect Code");

        const token = jwt.sign({
            id: user._id
        }, "test")

        const { password, ...info } = user._doc;
        res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);



    } catch (error) {

        res.status(400).send(error.response);
    }

}

export const logout = async (req, res) => {
    try {

        res.clearCookie('accessToken', {
            sameSite: 'none',
            secure: true
        }).status(200).send('Logged out');
    } catch (error) {

        res.status(400).send(error.response);
    }

}