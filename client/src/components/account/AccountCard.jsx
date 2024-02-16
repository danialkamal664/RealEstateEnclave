import React from "react"
import { featured } from "../data/Data"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AccountCard = () => {
    const [appointments, setAppointments] = useState([]);
    const [chats, setChats] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    useEffect(() => {
        const currentUserJSON = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(currentUserJSON);
        const getUserData = async () => {
            try {
                const response = await axios.post('http://localhost:8000/api/appointment/get', { "email": currentUserJSON.email });
                const responseChat = await axios.post('http://localhost:8000/api/chat/get', { "email": currentUserJSON.email });
                const data = response.data;
                const dataChat = responseChat.data;

                setAppointments(data);
                setChats(dataChat);
                console.log(appointments)
                console.log(chats)

            } catch (error) {
                console.log(error.response);
            }
        }
        getUserData();
    }, [])
    return (
        <>
            <div className='content grid2 mtop'>

                <div className='box' key='2'>
                    <h4>Name</h4>
                    <label>{currentUser.username}</label>
                </div>
                <div className='box' key='3'>
                    <h4>Email</h4>
                    <label>{currentUser.email}</label>
                </div>
                <div className="sizedBox"></div>
                {appointments.map((items, index) => (
                    <div className="box" key={index + 4}>
                        <h4>Appointment {index + 1}</h4>
                        <label>Date: {items.date}</label>
                        <div></div>
                        <label>Time: {items.time}</label>
                        <div></div>
                        <label>{items.buyer == currentUser.email ? 'Seller' : 'Buyer'}: {items.buyer == currentUser.email ? items.seller : items.buyer}</label>

                    </div>
                ))}
                <div className="sizedBox"></div>
                {chats.map((items, index) => (
                    <div className="box" key={index + 100}>
                        <h4>{items.receiverEmail == currentUser.email ? 'Message from' : 'Message to'} {items.receiverEmail == currentUser.email ? items.senderEmail : items.receiverEmail}</h4>

                        <label>Message: {items.message}</label>
                        <div></div>
                        <label>{items.time}</label>
                        <div></div>
                        <Link to={{ pathname: '/chat', email: items.senderEmail }}>{items.receiverEmail != currentUser.email ? <button className="btn1">Reply</button> : <></>}</Link>

                    </div>
                ))}
            </div>
        </>
    )
}

export default AccountCard
