import React from "react"
import Button from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
import './chat.css'


const Chat = (props) => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/chat/send", {
                "sender": JSON.parse(localStorage.getItem('currentUser')).email,
                "receiver": props.location.email,
                "message": message,
                "time": Date().toString()
            });
            console.log(res.data);
            window.location.href = "/"
        } catch (error) {
            console.log(error.response);
        }
    }


    return (
        <>
            <div className="form">
                <form>
                    <div className="input-container">
                        <label>Message </label>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} type="name" placeholder="" id="type" name="type" />
                    </div>
                    <button className="btn1 subBtn" as="input" type="submit" value="Submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Chat