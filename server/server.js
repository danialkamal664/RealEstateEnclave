import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
import plotRoute from './routes/plot.route.js'
import chatRoute from './routes/chat.route.js'
import appointmentRoute from './routes/appointment.route.js'
import cookieParser from 'cookie-parser';

const app = express();

mongoose.set('strictQuery', true);

// TODO: change the connection when submitting
const connect = async => {
    try {

        mongoose.connect('mongodb+srv://new_user21:newuser@real-estate.ezs1sms.mongodb.net/?retryWrites=true&w=majority&dbname=test');

        console.log('Connected to mongodb');
    } catch (error) {
        console.log(error);
    }
}
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use((err, req, res, next) => {

})
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb' }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoute);
app.use('/api/chat', chatRoute);
app.use('/api/auth', authRoute);
app.use('/api/plot', plotRoute);
app.use('/api/appointment', appointmentRoute);


app.listen(8000, () => {
    connect();
    console.log(`Server is running on port 8000.`);
});